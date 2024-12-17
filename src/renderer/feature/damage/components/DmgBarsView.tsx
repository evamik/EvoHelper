import { FC, useMemo } from "react";
import Box from "@mui/material/Box/Box"
import { IDamagePerPlayer } from "../../../../types";
import { colors } from "../colors";


interface Props {
    damageReport?: IDamagePerPlayer
}

const getColorByClassName = (name: string): string => {
    if (!colors[name]) return colors.fallback;
    return colors[name];
} 

export const DamageBarsView: FC<Props> = (props) => {
    const { damageReport } = props;

    if (!damageReport || damageReport.players.length === 0) return null;
    return (
        <Box sx={{ marginTop: '10px' }}>
            {damageReport.players.map((el, index) => (
                <Box sx={{ position: 'relative', height: '30px' }}>
                    <div style={{ position: 'absolute', top: 4, left: 10}}>{index + 1}.&nbsp;{el.playerName}&nbsp;[{el.className}]</div>
                    <div style={{ position: 'absolute', top: 4, right: 5 }}>{el.damagePercentage}%</div>
                    <Box sx={{ 
                        height: '100%',
                        width: `${el.damagePercentage / damageReport.players[0].damagePercentage * 100}%`,
                        borderRadius: '2px',
                        background: 
                            'linear-gradient(180deg, rgba(180,180,180,0.15) 0%, rgba(0,0,0,0.0) 10%, rgba(0,0,0,0.0) 90%, rgba(180,180,180,0.15) 100%),' +
                            `linear-gradient(to right, ${getColorByClassName(el.className)}C8 0%, ${getColorByClassName(el.className)}B4 50%, ${getColorByClassName(el.className)}20 100%)`,
                          
                    }}/>
                </Box>
            ))}
        </Box>
    )
}