# Sound Room — Quest 3 WebXR

A separate, static WebXR port of the bedroom sound playground. The existing ChatGPT Site is unchanged. Open the GitHub Pages URL in **Meta Quest Browser**, start listening, then choose **Enter VR · Quest**. Allow the browser's immersive VR prompt. HTTPS and a WebXR-capable browser are required; desktop browsers keep the original mouse/keyboard experience.

**Live:** https://zhenga1.github.io/sound-room-webxr/ · **Source:** https://github.com/zhenga1/sound-room-webxr

## Door to Inner Eden

The original bedroom door now opens an embedded outdoor paradise without ending the VR session. Point at the door and pull the trigger, or click it on desktop. After the opening animation you enter the partner's preserved courtyard, surrounded by a shore, grove, and overlook. A marked return door at the entrance brings you back to the unchanged bedroom layout. In the headset, use the **EDEN** menu tab for Deep Calm, Quiet Wonder, Open Freedom, Energy, Nature, Dreaminess, Pause here, saving a favorite, and returning. On the flat page, **Shape your paradise** offers two personalization prompts, favorite naming and loading. Keywords select existing settings; no psychological interpretation or live world generation is performed.

Courtyard geometry is adapted from Chenguang Yang's MIT-licensed `chenguang/webxr` branch of https://github.com/TheWindRider/hackathon-immerse-bay, preserving its fountain, lanterns, hedges, shrub and paving. See `PARTNER-LICENSE.txt`. The integrated public world uses original procedural waves, water and wind; the partner's standalone branch retains its existing SATIE scene and recordings. No paid audio generation was performed. The separately hosted partner page has a return link that ends VR before changing websites, as required by browser navigation; re-enter VR after that cross-site transition.

Dedicated courtyard effects add fountain flow and individual splashes at the basin, plus rustling at the entrance hedge, back hedge and grove canopy. Seven continuous positional layers use HRTF panning with distance falloff; Energy and Nature vary the mix, while outdoor effects fade out when returning to the bedroom. These are original procedural effects, not copied SATIE recordings.

**Quest controls guide:** https://zhenga1.github.io/sound-room-webxr/controls.html. Inside VR, choose **CONTROLS** in the floating menu and browse four pages with Previous / Next. The browser guide's **Open room with the in-VR guide** link opens the room with that tab selected.

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

The floating menu has **SOUND**, **TRACES**, **VIEW**, **OBJECTS**, and **CONTROLS** tabs. SOUND lists placed sound sources and floor traces, with mute and volume controls for each. VIEW provides turn left/right, closer/further (VR zoom by movement), menu sizing, recentering, and ink undo/clear. OBJECTS adds, rotates, and removes furnishings and switches Studio/Cathedral. TRACES has separate selectors for the next trace and for each saved trace. Ink color changes only drawing color.

Movement and turning work even while the menu is open. **A or either thumbstick click** brings the menu back. A persistent **MENU / SOUNDS** target appears at the bottom center of your view; point either controller at it and pull the trigger to reopen/recenter the sound panel without a face-button shortcut. A white reticle shows the right controller's current target. Close the menu to draw or grip objects. In VR, view zoom moves you closer/further; it does not change the headset's field of view.

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

The live site currently publishes from **`gh-pages` / root** using GitHub's branch-based Pages builder. Its checked static output was built locally because custom GitHub Actions jobs were blocked by an account billing lock. Future changes should run `npm run check`, `npm test`, and `npm run build`, then publish the contents of `dist/` to the root of `gh-pages` (including `.nojekyll`). Source changes on `main` alone do not update that branch.

The included optional Actions workflow can build/deploy automatically once the account can run custom jobs. To use it, change **Settings → Pages → Build and deployment → Source** to **GitHub Actions**, then run **Deploy WebXR to Pages**. The earlier failed custom workflow is an account restriction, not a build/test failure. The branch-based Pages deployment succeeds independently.

Do not publish the neighboring `sound-room` directory; it contains separate evaluation assets and local state.

## Verification

Automated checks cover controller thumbstick mapping, stroke validation/caps, VR menu initialization, ink geometry/undo, session rig cleanup, bundled audio, and Pages-relative output. No physical Quest 3 is connected to this development session, so real headset tracking, controller feel, immersive audio, and frame rate remain unverified.

Outdoor mixer: open Outdoor mixer on desktop; in Quest press A / stick click to open the menu (choose SOUND in the integrated room). Ten independent channels cover fountain, birds, three foliage regions, stream, waves, breeze, pentatonic chimes and light meadow crickets. More sounds pages through VR controls; +/- changes volume, Mute silences a channel without losing its volume. Reset lively mix restores the curated bird-and-foliage-led balance. Settings persist on this browser. Supplemental sounds use local procedural Web Audio, not Attractor generation; original courtyard SATIE audio remains and follows matching mixer controls.
