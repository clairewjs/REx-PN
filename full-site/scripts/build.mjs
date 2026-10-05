import {readFile,mkdir,rm,writeFile,cp} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist/server',{recursive:true});
const bank=JSON.parse(await readFile('public/bank.json','utf8'));
const assets={};for(const [file,type] of [['index.html','text/html; charset=utf-8'],['app.js','text/javascript; charset=utf-8'],['style.css','text/css; charset=utf-8']])assets['/'+file]={body:await readFile('public/'+file,'utf8'),type};
const worker=await readFile('worker/index.js','utf8');await writeFile('dist/server/index.js',`const BANK=${JSON.stringify(bank)};\nconst ASSETS=${JSON.stringify(assets)};\n${worker}`);
console.log('Built standalone practice site.');
