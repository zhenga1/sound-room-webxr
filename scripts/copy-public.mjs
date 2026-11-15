import {mkdir,copyFile,writeFile} from 'node:fs/promises';
const audio=['bird','clock','fan','books','pages','piano','rain','record','tv','drums','strings'];
await mkdir('dist/audio',{recursive:true});
for(const name of audio)await copyFile(`src/audio/${name}.wav`,`dist/audio/${name}.wav`);
await writeFile('dist/.nojekyll','');
