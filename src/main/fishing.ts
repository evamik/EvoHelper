import { globalShortcut } from 'electron';
import { keyboard, Key, screen, Point} from '@nut-tree/nut-js';

keyboard.config.autoDelayMs = 1;

interface ColorCoordinateObj {
  R: number;
  G: number;
  B: number;
  x: number;
  y: number;
}

const FISHING_ROD_CLICK_INTERVAL = 1000 * 5; // 5 seconds
const COLOR_MARGIN = 10;
const AUTOSAVE_INTERVAL = 60 * 60 * 1000; // 1 hour

let scanInterval: ReturnType<typeof setInterval> | undefined
let startInterval: ReturnType<typeof setInterval> | undefined
let autoSaveInterval: ReturnType<typeof setInterval> | undefined

const click = async (button: Key) => {
  await keyboard.pressKey(button)
  await keyboard.releaseKey(button);
}
const closeEnough = (a: number, b: number) => {
  return Math.abs(a-b) < COLOR_MARGIN;
}

const fishingScanInterval = (delay: number, up: ColorCoordinateObj, down: ColorCoordinateObj) => {
  return setInterval(() => {
    screen.colorAt(new Point(up.x, up.y)).then((colorUp) => {
      if (closeEnough(colorUp.R, up.R) && closeEnough(colorUp.G, up.G) && closeEnough(colorUp.B, up.B)) {
        click(Key.Up);
      }
    })
    screen.colorAt(new Point(down.x, down.y)).then((colorDown) => {
      if (closeEnough(colorDown.R, down.R) && closeEnough(colorDown.G, down.G) && closeEnough(colorDown.B, down.B)) {
        click(Key.Down);
      }
    })
  }, delay);
}
export function stopFishingAndUnregisterHotkeys() {
  globalShortcut.unregister('CommandOrControl+9');
  globalShortcut.unregister('CommandOrControl+-');
  try {
    //@ts-ignore
    clearInterval(scanInterval);
    //@ts-ignore
    clearInterval(startInterval);
    scanInterval = undefined;
    startInterval = undefined;
  } catch (e) {

  }
}
export function armFishing(rodHotkey: any, up: ColorCoordinateObj, down: ColorCoordinateObj, delay: number, isAutosave: boolean = false) {
  stopFishingAndUnregisterHotkeys();
  globalShortcut.register('CommandOrControl+9', () => {
    if(!scanInterval && !startInterval) {
      click(rodHotkey);
      startInterval = setInterval(() => {
        click(rodHotkey);
      }, FISHING_ROD_CLICK_INTERVAL);
      scanInterval = fishingScanInterval(delay, up, down);
      if (isAutosave) {
        autoSaveInterval = setInterval(async () => {
          click(Key.Enter)
            .then(() => click(Key.Minus))
            .then(() => click(Key.S))
            .then(() => click(Key.Enter))
        }, AUTOSAVE_INTERVAL);
      }
    }
  });
  globalShortcut.register('CommandOrControl+-', () => {
   try {
      //@ts-ignore
      clearInterval(scanInterval);
     //@ts-ignore
      clearInterval(startInterval);
     //@ts-ignore
     clearInterval(autoSaveInterval);
     scanInterval = undefined;
      startInterval = undefined;
      autoSaveInterval = undefined;
    } catch (e) {
      // oh no, no interval to clear
      // anyway
   }
  });
}

