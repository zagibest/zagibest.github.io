function changeTheme(){
    document.body.classList.toggle("dark");
 };

 let time_limit = 30;

 let quotes_array_eng = [
    "You only live once, but if you do it right, once is enough.",
    "Failure is the condiment that gives success its flavor.",
    "Your time is limited, so don't waste it living someone else's life.",
    "Wake up with determination. Go to bed with satisfaction.",
    "It's going to be hard, but hard does not mean impossible.",
    "Learning never exhausts the mind.",
    "The only way to do great work is to love what you do.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "Money and success don’t change people; they merely amplify what is already there.",
    "In order to write about life first you must live it.",
    "The big lesson in life, baby, is never be scared of anyone or anything.",
    "Turn your wounds into wisdom.",
    "The unexamined life is not worth living.",
    "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    "You never really learn much from hearing yourself speak.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "Life is really simple, but men insist on making it complicated.",
    "My mama always said, life is like a box of chocolates. You never know what you’re gonna get."
  ];
  
  let quotes_array_mon = [
    "Амьдрал бол уул юм. Бид удаан авирч, түргэн урууддаг.",
    "Хэрэлдэж байгаа хоёрын хэн ухаантай нь буруутай. ",
    "Цаг хугацаа бол авъяас чадварыг хөгжүүлэх уудам орон юм.",
    "Холын зорилго үгүй аваас ойрын зовлон оршино.",
    "Өнгөрсөн бол сургамж, өнөөдөр боломж, ирээдүй бол бэлэг.",
    "Сайхан сэтгэл бол хэзээ ч хуучирдаггүй цорын ганц хувцас",
    "Чиний зорилгыг үл ойшоодог хүмүүсээс ямагт хол бай.",
    "Мөрөөдлөө биелүүлэх эхний алхам бол мөрөөдөх юм.",
    "Алхам алхмаар л явагдаж байж юмс бүтдэг юм.",
    "Ирээдүйг урьдчилан таамаглах хамгийн сайн арга бол түүнийг одооноос бий болгох явдал юм.",
    "Мэдэж байна гэдэг хангалтгүй. Үүнийгээ батлах ёстой. Амлана гэдэг хангалтгүй. Заавал хийх ёстой.",
    "Өөр хүн эсвэл өөр цагт гэж хойшлуулвал бид хэзээ ч өөрчлөгдөж чадахгүй.",
    "Өнөөдрийн чи бол чи, үнэнээс илүү үнэн. Чамаас илүү амьд чи гэж байхгүй.",
    "Чиний зорилгыг үл ойшоодог хүмүүсээс ямагт хол бай. Өчүүхэн хүмүүс л үргэлж тэгдэг юм.",
    "Хүүхэддээ юу бодохыг нь биш хэрхэн бодохыг нь зааж өг.",
    "Зорилго мөрөөдлийг бодит болгох нь манлайлал юм",
    "Чамайг манлайлагчаа гэж харах шалтгааныг өдөр бүр хүмүүст өгч бай",
    "Манлайлагч хүн итгэл найдварын их ундарга байх ёстой",
    "Ямар нэг зорилго тавих, шинэ мөрөөдөлтэй байхад хэзээ ч оройтохгүй.",
    "Яг одоо хий. Ирээдүй цаг бол амлалт биш."
  ];

let timer_text = document.querySelector(".curr_time");
let accuracy_text = document.querySelector(".curr_accuracy");
let error_text = document.querySelector(".curr_errors");
let cpm_text = document.querySelector(".curr_cpm");
let wpm_text = document.querySelector(".curr_wpm");
let quote_text = document.querySelector(".quote");
let input_area = document.querySelector(".input_area");
let restart_btn = document.querySelector(".restart_btn");
let cpm_group = document.querySelector(".cpm");
let wpm_group = document.querySelector(".wpm");
let error_group = document.querySelector(".errors");
let accuracy_group = document.querySelector(".accuracy");

let timeLeft = time_limit;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let timer = null;

var mainQuote = quotes_array_eng;

function changeLanguage(){
  if(mainQuote==quotes_array_eng){
     mainQuote = quotes_array_mon;
     quote_text.textContent = 'Доор талбайд дарж тоглоомоо эхлүүлнэ үү.';
   }
  else{
     mainQuote = quotes_array_eng;
     quote_text.textContent = 'Click on the area below to start the game.';
  }
}


function updateQuote() {
    quote_text.textContent = null;
    current_quote = mainQuote[quoteNo];
  
    current_quote.split('').forEach(char => {
      const charSpan = document.createElement('span')
      charSpan.innerText = char
      quote_text.appendChild(charSpan)
    })

    quoteNo = Math.floor(Math.random() * 19);
  }

function processCurrentText() {

  curr_input = input_area.value;
  curr_input_array = curr_input.split('');
  
  characterTyped++;
  
  errors = 0;
  
  quoteSpanArray = quote_text.querySelectorAll('span');
  quoteSpanArray.forEach((char, index) => {
    let typedChar = curr_input_array[index]
  
      if (typedChar == null) {
        char.classList.remove('correct_char');
        char.classList.remove('incorrect_char');
  
      } else if (typedChar === char.innerText) {
        char.classList.add('correct_char');
        char.classList.remove('incorrect_char');
  
      } else {
        char.classList.add('incorrect_char');
        char.classList.remove('correct_char');
  
        errors++;
      }
    });
  
    error_text.textContent = total_errors + errors;
  
    let correctCharacters = (characterTyped - (total_errors + errors));
    let accuracyVal = ((correctCharacters / characterTyped) * 100);
    accuracy_text.textContent = Math.round(accuracyVal);
  
    if (curr_input.length == current_quote.length) {
      updateQuote();
  
      total_errors += errors;
  
      input_area.value = "";
    }
  }

function updateTimer() {
    if (timeLeft > 0) {
      timeLeft--;
  
      timeElapsed++;
  
      timer_text.textContent = timeLeft + "s";
    }
    else {
      finishGame();
    }
  }

  function finishGame() {
    clearInterval(timer);
  
    input_area.disabled = true;
  
    if(mainQuote==quotes_array_eng){
      quote_text.textContent = "Click on restart to start a new game.";
    }
    else{
      quote_text.textContent = "Restart товч дээр дарж шинэ үе эхлүүлээрэй.";
    }
    
  
    restart_btn.style.display = "block";
  
    cpm = Math.round(((characterTyped / timeElapsed) * 60));
    wpm = Math.round((((characterTyped / 5) / timeElapsed) * 60));
  
    cpm_text.textContent = cpm;
    wpm_text.textContent = wpm;
  
    cpm_group.style.display = "block";
    wpm_group.style.display = "block";
  }


  
function resetValues() {
    timeLeft = time_limit;
    timeElapsed = 0;
    errors = 0;
    total_errors = 0;
    accuracy = 0;
    characterTyped = 0;
    quoteNo = 0;
    input_area.disabled = false;
  
    input_area.value = "";
    if(mainQuote==quotes_array_eng){
      quote_text.textContent = 'Click on the area below to start the game.';
    }
    else{
      quote_text.textContent = 'Доор талбайд дарж тоглоомоо эхлүүлнэ үү.';
    }
    
    accuracy_text.textContent = 100;
    timer_text.textContent = timeLeft + 's';
    error_text.textContent = 0;
    restart_btn.style.display = "none";
    cpm_group.style.display = "none";
    wpm_group.style.display = "none";
  }

  function startGame() {

    resetValues();
    updateQuote();
  
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
  }