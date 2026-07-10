const missions={"1": {"t": "Mission 01 : First Step", "g": "🎯 เดินไปพบ Mimo", "th": "เริ่มจากเส้นทางตรงง่าย ๆ", "s": 36, "stars": [], "target": 40, "obs": {}, "hint": "เดินขวา 4 ครั้ง", "next": 2, "r2": false, "r3": false}, "2": {"t": "Mission 02 : First Star", "g": "🎯 เก็บดาวแล้วไปพบ Mimo", "th": "ต้องเก็บดาวก่อน แล้วค่อยไปหา Mimo", "s": 36, "stars": [38], "target": 40, "obs": {}, "hint": "เดินขวา 4 ครั้ง จะผ่านดาวก่อนถึง Mimo", "next": 3, "r2": false, "r3": false}, "3": {"t": "Mission 03 : Go Up", "g": "🎯 ฝึกเดินขึ้น", "th": "Mimo อยู่ด้านบนของแมว", "s": 39, "stars": [25], "target": 11, "obs": {"33": "tree", "34": "tree", "35": "tree", "40": "rock"}, "hint": "เดินขึ้นหลายครั้ง", "next": 4, "r2": false, "r3": false}, "4": {"t": "Mission 04 : Go Around", "g": "🎯 เดินขวาและเดินขึ้น", "th": "หาทางไปเก็บดาวแล้วขึ้นไปหา Mimo", "s": 36, "stars": [38], "target": 24, "obs": {"37": "rock", "39": "tree"}, "hint": "เดินขวาไปเก็บดาว แล้วเดินขึ้น", "next": 5, "r2": false, "r3": false}, "5": {"t": "Mission 05 : First Challenge", "g": "🎯 ใช้หลายทิศทาง", "th": "วางแผนก่อนกด RUN", "s": 36, "stars": [38, 25], "target": 12, "obs": {"31": "rock", "32": "tree", "33": "tree", "39": "water", "18": "tree"}, "hint": "เก็บดาวล่างก่อน แล้วเดินขึ้นไปดาวบน", "next": 6, "r2": false, "r3": false}, "6": {"t": "Mission 06 : Repeat 2", "g": "🎯 เริ่มใช้ทำซ้ำ 2 ครั้ง", "th": "ใช้ทำซ้ำ 2 ครั้งเพื่อลดจำนวนบล็อก", "s": 36, "stars": [38], "target": 40, "obs": {"30": "rock", "31": "tree"}, "hint": "ลองวาง เดินขวา แล้วใช้ ทำซ้ำ 2 ครั้ง", "next": 7, "r2": true, "r3": false}, "7": {"t": "Mission 07 : Rock & Tree", "g": "🎯 หลบหินและต้นไม้", "th": "หินกับต้นไม้เดินผ่านไม่ได้", "s": 36, "stars": [32], "target": 28, "obs": {"30": "rock", "31": "tree", "37": "tree", "38": "rock", "39": "water"}, "hint": "ใช้อ้อมทางที่เปิดอยู่ และลองใช้ทำซ้ำ 2 ครั้ง", "next": 8, "r2": true, "r3": false}, "8": {"t": "Mission 08 : Repeat 3", "g": "🎯 ใช้ทำซ้ำ 3 ครั้งและหลบบ่อน้ำ", "th": "หาช่วงทางตรงที่เดินทิศเดิม 3 ช่อง", "s": 42, "stars": [34], "target": 20, "obs": {"35": "water", "28": "water", "21": "rock", "27": "tree", "33": "tree"}, "hint": "วางคำสั่งทิศทาง 1 บล็อก แล้วตามด้วย ทำซ้ำ 3 ครั้ง", "next": 9, "r2": false, "r3": true}, "9": {"t": "Mission 09 : Repeat Mix", "g": "🎯 เลือกใช้ทำซ้ำ 2 หรือ 3 ครั้ง", "th": "ช่วงสั้นใช้ทำซ้ำ 2 ครั้ง ช่วงยาวใช้ทำซ้ำ 3 ครั้ง", "s": 36, "stars": [22, 10], "target": 7, "obs": {"30": "rock", "31": "tree", "32": "water", "24": "tree", "25": "rock", "26": "water", "18": "tree", "19": "rock"}, "hint": "ลองใช้ทำซ้ำ 2 ครั้งในช่วงสั้น และทำซ้ำ 3 ครั้งในช่วงยาว", "next": 10, "r2": true, "r3": true}, "10": {"t": "Mission 10 : Repeat 2 & 3", "g": "🎯 ใช้ทำซ้ำ 2 และ 3 ครั้ง", "th": "เลือกว่าจะใช้ทำซ้ำ 2 หรือ 3 ให้เหมาะกับเส้นทาง", "s": 42, "stars": [36, 18], "target": 4, "obs": {"35": "tree", "34": "rock", "33": "water", "27": "tree", "26": "rock", "20": "tree", "19": "water", "13": "rock"}, "hint": "ด่านนี้ลองใช้ทำซ้ำ 3 ครั้งกับช่วงที่เดินทิศเดิมหลายช่อง", "next": 11, "r2": true, "r3": true}, "11": {"t": "Mission 11 : Choose Path", "g": "🎯 เลือกทางที่สั้นกว่า", "th": "มีหลายทาง ลองหาทางที่ใช้คำสั่งน้อย", "s": 36, "stars": [38], "target": 14, "obs": {"30": "rock", "31": "tree", "32": "water", "25": "tree", "18": "rock", "11": "water"}, "hint": "ไปทางขวาก่อน แล้วขึ้นด้านขวา ใช้ทำซ้ำช่วยได้", "next": 12, "r2": true, "r3": true}, "12": {"t": "Mission 12 : Star First", "g": "🎯 ห้ามลืมเก็บดาว", "th": "ถึง Mimo แล้วแต่ลืมดาว จะยังไม่ผ่าน", "s": 29, "stars": [31, 17], "target": 21, "obs": {"30": "water", "37": "rock", "38": "tree", "24": "rock", "25": "tree", "26": "water"}, "hint": "เก็บดาวใกล้ก่อน แล้วขึ้นไปดาวบน", "next": 13, "r2": true, "r3": true}, "13": {"t": "Mission 13 : Opposite Stars", "g": "🎯 ดาวอยู่คนละฝั่ง", "th": "ต้องเก็บดาวอย่างน้อย 2 ดวงที่อยู่คนละด้าน", "s": 36, "stars": [29, 42], "target": 4, "obs": {"30": "rock", "31": "tree", "32": "water", "33": "tree", "34": "rock", "35": "water", "23": "tree", "24": "rock", "25": "tree"}, "hint": "เก็บดาวซ้าย แล้วกลับไปดาวขวา ก่อนขึ้นด้านบน", "next": 14, "r2": true, "r3": true}, "14": {"t": "Mission 14 : Narrow Gate", "g": "🎯 ผ่านช่องแคบ", "th": "ดูช่องว่างระหว่างสิ่งกีดขวางให้ดี", "s": 42, "stars": [28], "target": 8, "obs": {"35": "tree", "34": "rock", "33": "water", "32": "tree", "31": "rock", "24": "water", "17": "tree", "10": "rock"}, "hint": "มีช่องให้ขึ้นทางขวา แล้วค่อยเลี้ยวซ้าย", "next": 15, "r2": true, "r3": true}, "15": {"t": "Mission 15 : Mini Boss 2", "g": "🎯 คิดหลายขั้นตอน", "th": "แบ่งปัญหาเป็นช่วงสั้น ๆ", "s": 36, "stars": [22, 16, 10], "target": 7, "obs": {"37": "water", "38": "rock", "31": "tree", "32": "water", "25": "rock", "26": "tree", "19": "water", "20": "rock", "13": "tree"}, "hint": "ค่อย ๆ เก็บดาวจากล่างขึ้นบน ใช้ทำซ้ำลดบล็อก", "next": 16, "r2": true, "r3": true}, "16": {"t": "Mission 16 : Harder Route", "g": "🎯 เส้นทางยากขึ้น", "th": "อย่าใช้คำสั่งเดิมซ้ำโดยไม่คิด", "s": 42, "stars": [40, 26], "target": 12, "obs": {"35": "tree", "34": "rock", "33": "water", "32": "tree", "31": "rock", "25": "water", "24": "tree", "18": "rock", "17": "water"}, "hint": "เก็บดาวล่างก่อน แล้วหาช่องขึ้นด้านกลาง", "next": 17, "r2": true, "r3": true}, "17": {"t": "Mission 17 : Maze Start", "g": "🎯 เริ่มเขาวงกต", "th": "ลองใช้นิ้วลากเส้นทางบนจอก่อน", "s": 36, "stars": [23, 11], "target": 6, "obs": {"37": "rock", "30": "tree", "31": "water", "32": "tree", "25": "rock", "18": "water", "19": "tree", "20": "rock", "13": "water", "14": "tree"}, "hint": "เดินขึ้นสลับขวาเพื่อผ่านเขาวงกต", "next": 18, "r2": true, "r3": true}, "18": {"t": "Mission 18 : Plan Ahead", "g": "🎯 วางแผนล่วงหน้า", "th": "คิดก่อนว่าเก็บดาวไหนก่อนจะง่ายกว่า", "s": 29, "stars": [35, 21, 7], "target": 1, "obs": {"30": "tree", "31": "rock", "24": "water", "25": "tree", "18": "rock", "12": "water", "13": "tree", "14": "rock"}, "hint": "เก็บดาวขวาก่อน แล้วขึ้นไปด้านบน", "next": 19, "r2": true, "r3": true}, "19": {"t": "Mission 19 : Small Maze", "g": "🎯 เขาวงกตเล็ก", "th": "เส้นทางสั้นแต่ต้องแม่น", "s": 42, "stars": [36, 22, 8], "target": 2, "obs": {"35": "water", "34": "tree", "28": "rock", "27": "water", "26": "tree", "20": "rock", "19": "water", "18": "tree", "12": "rock", "11": "water"}, "hint": "เริ่มย้อนซ้าย แล้วขึ้นไปตามช่องว่าง", "next": 20, "r2": true, "r3": true}, "20": {"t": "Mission 20 : World 1 Boss", "g": "🎯 ภารกิจสุดท้ายของ World 1", "th": "ใช้ทุกทักษะที่เรียนมา ทั้งทิศทางและทำซ้ำ", "s": 42, "stars": [40, 29, 15, 3], "target": 1, "obs": {"35": "tree", "34": "rock", "33": "water", "27": "tree", "26": "rock", "25": "water", "19": "tree", "18": "rock", "17": "water", "11": "tree", "10": "rock"}, "hint": "เก็บดาวล่างก่อน ค่อยขึ้นซ้ายและไปดาวบน ใช้ทำซ้ำ 2/3 ช่วยลดบล็อก", "next": null, "r2": true, "r3": true}};
const board=document.getElementById('board');
const program=document.getElementById('program');
const modal=document.getElementById('modal');
const params=new URLSearchParams(location.search);
let missionId=parseInt(params.get('id')||'1',10);
let m=missions[missionId]||missions[1];
const total=42, cols=7;
let pos=m.s, gotStars=[], commands=[], running=false;

const iconCmd={
  up:'⬆ เดินขึ้น', down:'⬇ เดินลง',
  left:'⬅ เดินซ้าย', right:'➡ เดินขวา',
  repeat2:'🔁 ทำซ้ำ 2 ครั้ง', repeat3:'🔁 ทำซ้ำ 3 ครั้ง'
};
const obsName={tree:'ต้นไม้',rock:'ก้อนหิน',water:'บ่อน้ำ'};

const praiseMessages = [
  'ยินดีด้วย! หนูทำสำเร็จแล้ว',
  'หนูเก่งมาก! วางแผนได้ดีจริง ๆ',
  'เยี่ยมมาก! พยายามต่อไปนะ',
  'สุดยอดเลย! หนูแก้ปัญหาได้แล้ว',
  'เก่งขึ้นทุกด่านเลยนะ',
  'Professor Hoot ภูมิใจในตัวหนูมาก',
  'ดีมาก! หนูคิดเหมือนโปรแกรมเมอร์แล้ว',
  'ทำได้ดีมาก พร้อมไปด่านต่อไปแล้ว'
];

document.getElementById('missionTitle').textContent=m.t;
document.getElementById('missionGoal').textContent=m.g;
document.getElementById('thinkText').textContent=m.th;
document.getElementById('missionCount').textContent=missionId+' / 20';
if(m.r2) document.getElementById('repeat2Btn').classList.remove('hidden');
if(m.r3) document.getElementById('repeat3Btn').classList.remove('hidden');
if(!m.next) document.getElementById('nextBtn').textContent='กลับ HOME';

function expandCommands(list){
  const out=[];
  for(const c of list){
    if(c==='repeat2'){
      const last=out[out.length-1];
      if(last) out.push(last);
    } else if(c==='repeat3'){
      const last=out[out.length-1];
      if(last){ out.push(last); out.push(last); }
    } else out.push(c);
  }
  return out;
}

function nextCell(cmd){
  if(cmd==='right'&&pos%cols!==0) return pos+1;
  if(cmd==='left'&&pos%cols!==1) return pos-1;
  if(cmd==='up'&&pos-cols>=1) return pos-cols;
  if(cmd==='down'&&pos+cols<=total) return pos+cols;
  return pos;
}

function draw(){
  board.innerHTML='';
  for(let i=1;i<=total;i++){
    const c=document.createElement('div');
    c.className='cell';
    const ob=m.obs[String(i)]||m.obs[i];
    if(ob) c.classList.add(ob);
    c.innerHTML=`<span class="num">${i}</span>`;
    if(i===pos) c.innerHTML+=`<span class="asset cat"><span class="cat-face">🐱</span></span>`;
    else if(i===m.target) c.innerHTML+=`<span class="asset mouse"><span>🐭</span></span>`;
    else if(m.stars.includes(i)&&!gotStars.includes(i)) c.innerHTML+=`<span class="asset spark-star"></span>`;
    else if(ob) c.innerHTML+=`<span class="asset ${ob}-asset"></span>`;
    board.appendChild(c);
  }
}

function addCommand(cmd){
  if(running) return;
  commands.push(cmd);
  renderProgram();
  StepUpAudio.playClick();
}

function renderProgram(){
  if(!commands.length){
    program.innerHTML='กดบล็อกคำสั่งเพื่อวางที่นี่';
    return;
  }
  program.innerHTML=commands.map(c=>`<span class="program-block ${c.startsWith('repeat')?'repeat':''}">${iconCmd[c]}</span>`).join('');
}

function resetMission(){
  if(running) return;
  pos=m.s; gotStars=[]; commands=[];
  renderProgram(); draw();
  StepUpAudio.playClick();
}

function showHint(){
  StepUpAudio.playClick();
  alert(m.hint);
}

function nextMission(){
  StepUpAudio.playClick();
  setTimeout(()=>{
    if(m.next) location.href='mission.html?id='+m.next;
    else location.href='index.html';
  },70);
}

function runProgram(){
  if(running) return;
  if(!commands.length){
    StepUpAudio.playError();
    alert('วางคำสั่งก่อนนะคะ');
    return;
  }
  const exec=expandCommands(commands);
  running=true;
  let s=0;
  const timer=setInterval(()=>{
    if(s>=exec.length){
      clearInterval(timer);
      running=false;
      check();
      return;
    }
    const np=nextCell(exec[s]);
    if(np===pos){
      clearInterval(timer);
      running=false;
      StepUpAudio.playError();
      alert('เดินออกนอกกระดานไม่ได้ ลองเลือกทิศทางใหม่ค่ะ');
      return;
    }
    const ob=m.obs[String(np)]||m.obs[np];
    if(ob){
      clearInterval(timer);
      running=false;
      draw();
      StepUpAudio.playError();
      alert('เจอ'+obsName[ob]+' ลองวางแผนใหม่ค่ะ');
      return;
    }
    pos=np;
    StepUpAudio.playStep();
    if(m.stars.includes(pos)&&!gotStars.includes(pos)){
      gotStars.push(pos);
      StepUpAudio.playStar();
    }
    draw();
    s++;
  },360);
}

function check(){
  const allStars=m.stars.every(x=>gotStars.includes(x));
  if(pos===m.target&&allStars){
    const praise = missionId===20
      ? 'ยินดีด้วย! หนูผ่าน World 1 แล้ว เก่งมากจริง ๆ'
      : praiseMessages[(missionId-1)%praiseMessages.length];
    document.getElementById('completeTitle').textContent =
      missionId===20 ? 'WORLD 1 COMPLETE!' : 'ยินดีด้วย!';
    document.getElementById('completeText').textContent=praise;
    modal.classList.remove('hidden');
    StepUpAudio.playComplete();
    localStorage.setItem('stepupMission'+missionId,'complete');
  } else {
    StepUpAudio.playError();
    alert('ยังไม่สำเร็จ ลองคิดอีกนิดค่ะ');
  }
}

function clearOne(){
  if(running) return;
  commands.pop();
  renderProgram();
  StepUpAudio.playClick();
}

function showTeacherHint(){
  StepUpAudio.playClick();
  alert('แนวสอนครู:\n1) ให้เด็กใช้นิ้วลากเส้นทางก่อน\n2) ถามว่าเจอช่วงคำสั่งซ้ำตรงไหน\n3) ให้เด็กอธิบายเหตุผลก่อนกด RUN');
}

function skipMission(){
  StepUpAudio.playClick();
  if(m.next) location.href='mission.html?id='+m.next;
  else location.href='mission-select.html';
}

function solutionForMission(id){
  const sols={
    1:['right','right','right','right'],
    2:['right','right','right','right'],
    3:['up','up','up','up'],
    4:['right','right','up','up'],
    6:['right','repeat2'],
    8:['up','repeat3']
  };
  return sols[id]||[];
}

function showSolution(){
  const sol=solutionForMission(missionId);
  StepUpAudio.playClick();
  if(!sol.length){
    alert('ด่านนี้มีหลายวิธี ครูใช้ Hint ประกอบและให้เด็กอธิบายเส้นทางค่ะ');
    return;
  }
  commands=[...sol];
  renderProgram();
}

draw();
renderProgram();
StepUpAudio.syncButtons();
