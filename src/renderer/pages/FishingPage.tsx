import { useState } from 'react';
import Button from '@mui/material/Button';
import { Key } from '../../constants/keyCodes';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export function FishingPage() {
  const [rodButton, setRodButton] = useState(Key.NumPad8);
  const [delay, setDelay] = useState(500);
  const handleChange = (event: SelectChangeEvent) => {
    // @ts-ignore
    setRodButton(event.target.value);
  };

  const handleDelayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDelay(parseInt(event.target.value) || 500);
  }
  const onStartClick = () => {
    console.log(rodButton);
    window.electron.ipcRenderer.sendMessage('fishing_arm', {
      hotkey: rodButton,
      up: {
        x: 452,
        y: 630,
        R: 250,
        G: 204,
        B: 9,
      },
      down: {
        x:453,
        y: 632,
        R: 7,
        G: 250,
        B: 9,
      },
      delay
    });
  }

  const onCancelClick = () => {
    window.electron.ipcRenderer.sendMessage('fishing_disarm');
  }

  return (
    <>
      <Typography variant="h6">Current hotkeys:</Typography>
      <Typography variant="body2">Ctrl + 9: fish</Typography>
      <Typography variant="body2">Ctrl + -: pause</Typography>

      <Typography variant="body1">Set 1920x1080 resolution for this to work.</Typography>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="standard-label">Rod hotkey</InputLabel>
        <Select
          labelId="standard-label"
          id="select-standard"
          value={rodButton}
          onChange={handleChange}
        >
          <MenuItem value={Key.NumPad8}>Numpad 8</MenuItem>
          <MenuItem value={Key.Num6}>6</MenuItem>
          <MenuItem value={Key.Num5}>5</MenuItem>
          <MenuItem value={Key.Num4}>4</MenuItem>
          <MenuItem value={Key.Num3}>3</MenuItem>
          <MenuItem value={Key.Num2}>2</MenuItem>
          <MenuItem value={Key.Num1}>1</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="input-label">Delay in ms</InputLabel>
      <Input
        id="input-standard"
        value={delay}
        onChange={handleDelayChange}
      />
    </FormControl>
      <br />
      <Button onClick={onStartClick} color="success">
        Start
      </Button>
      <Button onClick={onCancelClick} color="warning">
        Stop
      </Button>
    </>
  )
}
