import { useMemo } from "react";
import { useParams } from "react-router";
import Box from "@mui/material/Box/Box"
import { useDamageReportContext } from "../context"
import Typography from "@mui/material/Typography";
import { DamageTypeSelector } from "./DamageTypeSelector";
import { DamageBarsView } from "./DmgBarsView";

export const DamageContainer = () => {
    const { dungeonName, damageTypes } = useDamageReportContext();
    const { type } = useParams();

    const damageReport = useMemo(() => {
        if (!type || type == '' || !damageTypes[type]) return undefined;
        let res = damageTypes[type];
        res.players.sort((a,b) => b.damagePercentage - a.damagePercentage)
        res.players = res.players.filter(el => el.damagePercentage > 0.9)
        return res;
    }, [damageTypes, type])
    return (
        <div style={{maxWidth: 800}}>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'row',
                }}>
                <Typography variant="h6">{dungeonName}</Typography>
                <DamageTypeSelector/>
            </Box>
            <DamageBarsView damageReport={damageReport}/>
        </div>
    )
}