# Sound Room — Quest 3 WebXR

A separate, static WebXR port of the bedroom sound playground. The existing ChatGPT Site is unchanged. Open the GitHub Pages URL in **Meta Quest Browser**, start listening, then choose **Enter VR · Quest**. Allow the browser's immersive VR prompt. HTTPS and a WebXR-capable browser are required; desktop browsers keep the original mouse/keyboard experience.

## Quest controller controls

| Control | Action |
| --- | --- |
| Left stick | Head-relative walking |
| Right stick left/right | 30° snap turn |
| Left trigger, point at floor, release | Teleport |
| Right trigger in Draw mode | Draw freehand 3D strokes at the controller tip |
| Right trigger in Trace mode | Draw a floor sound trace; release to finish |
| Right trigger in Move mode | Select and drag an object on the floor |
| Grip while pointing at an object | Select and drag that object in any mode |
| Right A | Show/hide or bring the object menu in front of you |
| Right B | Cycle Draw / Trace / Move |
| Left X | Undo last ink stroke; restore last cleared batch when no ink remains |
| Left Y | Change ink color |

The floating menu adds bedroom objects, cycles catalog pages, adjusts selected object volume, mutes/removes/rotates objects, switches Studio/Cathedral, and undoes/clears ink. Its Color / sound button cycles both ink color and the selected floor-trace sound. Close the menu to walk or draw. To select an object, grip it with the ray, then open the menu to edit it.

Ink has five colors, a 4,096-point total budget and 256-point per-stroke limit. Two or more points create a stroke. Strokes, room layout and floor traces save in browser-local storage on the headset; these do not sync to the original site or another device. Room contents can be reset using the desktop room controls; ink has its own clear/undo controls.

## Audio and scope

This public build uses original procedural WAV loops and Web Audio HRTF panning/convolution reverb. **It does not include Attractor/SATIE runtime, evaluation-only recordings, private mixer history, captures, credentials, or the Unity project.** The existing site's authored SATIE files are preserved in the separate original source checkout. The public strings sound is an original synthesized drone, not the original site's recording.

The scene supports desktop controls and Quest tracked controllers. It does not include passthrough, hand tracking, multiplayer, room scanning, or furniture physics. Stay within your configured Quest boundary. Shadows are disabled and foveation is enabled in VR; this is a small scene but performance and interaction need physical headset verification.

## Development

```sh
npm ci
npm run dev
npm run check
npm test
npm run build
```

`dist/` is the complete static website. Relative URLs work at a GitHub Pages repository subpath. Audio files are copied by `scripts/copy-public.mjs`. No backend or API keys are needed. The optional Google Fonts stylesheet has local font fallbacks.

## Deploy to GitHub Pages

Push this repository to GitHub on `main`. In **Settings → Pages → Build and deployment**, select **GitHub Actions**. The included workflow runs checks and tests, builds the app, and deploys `dist/`. Do not publish the neighboring `sound-room` directory; it contains separate evaluation assets and local state.

## Verification

Automated checks cover controller thumbstick mapping, stroke validation/caps, VR menu initialization, ink geometry/undo, session rig cleanup, bundled audio, and Pages-relative output. No physical Quest 3 is connected to this development session, so real headset tracking, controller feel, immersive audio, and frame rate remain unverified.
