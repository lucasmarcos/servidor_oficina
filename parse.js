import { readFileSync } from "fs";

const file = readFileSync("dados_de_exemplo_extraidos_do_portal.txt", "utf-8");
const lines = file.split("\n");

let i = 0;

while(i < lines.length) {
  let monitoria = {};
  monitoria.campus = lines[i++].split(":")[1].trim();
  monitoria.disciplina = lines[i++];
  monitoria.monitor = lines[i++].split(":")[1].trim();

  i++;
  monitoria.remoto = [];
  while(lines[i] != "") {
    monitoria.remoto.push(lines[i++]);
  }
  i++;

  i++;
  monitoria.resencial = [];
  while(lines[i] != "") {
    monitoria.resencial.push(lines[i++]);
  }
  i++;

  monitoria.local = lines[i++].split(":")[1].trim();
  monitoria.data = lines[i++].split(":")[1].trim();
  monitoria.link = lines[i++].replace("Sala Remota: ", "");
  i++;

  console.log(JSON.stringify(monitoria));
}
