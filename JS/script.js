const player = document.querySelector('.player__main');
const playBtn = document.querySelector('.player__play');
const audio = document.querySelector('.player__audio');
const progressBarContainer = document.querySelector('.player__bar-box');
const progressBar = document.querySelector('.player__bar');
const birdName = document.querySelector('.player__bird-name')
const birdImgContainer = document.querySelector('.player__img-box');
const birdImg = document.querySelector('.player__bird-img');
const description = document.querySelector('.birds__description-p');
const birdDescImg = document.querySelector('.birds__description-img');
const birdsUnderName = document.querySelector('.birds__undername-p');
const descriptionBox = document.querySelector('.birds__description');
const item = document.querySelector('.list__item');
const itemBird = document.getElementsByClassName('list__item');
let nextPageButton = document.querySelector('.button__next-wrap')

let listTrue = document.querySelector('.birds__list-true')
let scoreCount = 30
// список песен
const songs = [
'voron', 'zhuravel', 'lastochka', 'kozodoy', 'kukushka', 'sinitsa',
'vorobey', 'grach', 'galka', 'drozd', 'soroka', 'soyka',
'zyablik', 'klyost', 'gorlica', 'dyatel', 'udod', 'strizh',
'zhavoronok', 'solovey', 'skvorets', 'ivolga', 'sviristel', 'schegol',
'orel', 'korshun', 'lun', 'sokol', 'yastreb', 'filin',
'burevestnik', 'chayka', 'olusha', 'pelikan', 'pingvin', 'albatros']
const birdsInfo = [
   'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
   'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
   'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
   'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
   'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
   'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
   'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
   'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
   'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
   'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
   'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
   'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
   'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
   'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
   'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
   'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
   'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
   'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
   'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
   'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
   'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
   'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
   'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
   'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
   'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
   'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
   'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
   'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
   'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
   'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
   'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
   'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
   'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
   'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
   'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
   'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
]
const birdsEnglish = [
   'Corvus corax',
   'Grus grus',
   'Delichon urbicum',
   'Caprimulgus europaeus',
   'Cuculus canorus',
   'Parus major',
   'Passer domesticus',
   'Corvus frugilegus',
   'Coloeus monedula',
   'Turdus philomelos',
   'Pica pica',
   'Garrulus glandarius',
   'Fringilla coelebs',
   'Loxia curvirostra',
   'Streptopelia turtur',
   'Dendrocopos major',
   'Upupa epops',
   'Apus apus',
   'Alauda arvensis',
   'Luscinia luscinia',
   'Sturnus vulgaris',
   'Oriolus oriolus',
   'Bombycilla garrulus',
   'Carduelis carduelis',
   'Aquila nipalensis',
   'Milvus migrans',
   'Circus cyaneus',
   'Falco peregrinus',
   'Accipiter gentilis',
   'Bubo bubo',
   'Diomedea exulans',
   'Sula nebouxii',
   'Puffinus griseus',
   'Pelecanus',
   'Aptenodytes forsteri',
   'Larus argentatus',
]

const songsFirst = songs.slice(0, 6)
const songsTwo = songs.slice(6, 12)
const songsThree = songs.slice(12, 18)
const songsFour = songs.slice(18, 24)
const songsFive = songs.slice(24, 30)
const songsSix = songs.slice(30, 36)

let randomColumn;
randomColumn = Math.floor(Math.random() * 6)
console.log(randomColumn)
let testOne = 1
let testTwo = 1

//начальная песня
let songIndex = randomColumn;
// Init
function loadSong(song) {
   audio.src = `SOUNDS/${song}.mp3`
}
loadSong(songs[songIndex])
//PlaySong
function playSong() {
   player.classList.add('play')
   audio.play()
}
//PauseSong
function pauseSong() {
   player.classList.remove('play')
   audio.pause()
}
//PlayPause
playBtn.addEventListener('click', function () {
   const isPlaying = player.classList.contains('play');
   if (isPlaying) {
      pauseSong()
   } else {
      playSong()
   }
})
//ProgressBar
function updateProgressBar(e) {
   const { duration, currentTime } = e.srcElement;
   const progressPercents = (currentTime / duration) * 100;
   progressBar.style.width = `${progressPercents}%`
}
audio.addEventListener('timeupdate', updateProgressBar) 
//SetProgress
function setProgress(e) {
   const width = this.clientWidth;
   const clickX = e.offsetX;
   const duration = audio.duration;
   audio.currentTime = (clickX / width) * duration;
}
progressBarContainer.addEventListener('click', setProgress)
/// NEXT PAGE


let inCountBird = 0;
let outCountBird = 6
let nextCount = 0;
let clicksAmount = 1;
itemBird[0].classList.add('active')
let randomRows

let birdInClammer = document.querySelectorAll('li.birds__item')

function nextPageButtonFunction(){
   
   if (clicksAmount == 1) {
      itemBird[1].classList.add('active')
      itemBird[0].classList.remove('active')
   } else if (clicksAmount == 2) {
      itemBird[2].classList.add('active')
      itemBird[1].classList.remove('active')
   } else if (clicksAmount == 3) {
      itemBird[3].classList.add('active')
      itemBird[2].classList.remove('active')
   } else if (clicksAmount == 4) {
      itemBird[4].classList.add('active')
      itemBird[3].classList.remove('active')
   } else if (clicksAmount == 5) {
      itemBird[5].classList.add('active')
      itemBird[4].classList.remove('active')
   } else if (clicksAmount == 5) {
      itemBird[5].classList.add('active')
      itemBird[4].classList.remove('active')
   }
   nextCount++
   clicksAmount++
   inCountBird += 6
   outCountBird += 6

   for (let g = 0; g < birdInClammer.length; g++) {
      birdInClammer[g].innerHTML = songs.slice(inCountBird, outCountBird)[g].toUpperCase()
      birdInClammer[g].classList.remove('green')
      birdInClammer[g].classList.remove('enable')
   }
   birdImg.src = 'IMG/incognito-bird.jpg'
   birdName.innerHTML = '***'
}




let g = 0;
/// INNER В СПИСОК ПТИЦ

for (g; g < birdInClammer.length; g++) {
   birdInClammer[g].innerHTML = songsFirst[g].toUpperCase()
}
// TRUE OR FALS COLOR OF BIRDS
let birdsBgChange = document.getElementsByClassName('birds__item')
let score = document.querySelector('.header__score')
for (let e = 0; e < birdInClammer.length; e++) {
   birdInClammer[e].addEventListener('click', () => {
      description.innerHTML = `${birdsInfo[e]}`;
      birdDescImg.src = `IMG/${songsFirst[e]}.jpg`
      birdsUnderName.innerHTML = `${birdsEnglish[e]}`
      
      if (nextCount == 1) {
      description.innerHTML = `${birdsInfo.slice(6)[e]}`;
      birdDescImg.src = `IMG/${songs.slice(6)[e]}.jpg`
      birdsUnderName.innerHTML = `${birdsEnglish.slice(6)[e]}`
      }else if (nextCount == 2) {
         description.innerHTML = `${birdsInfo.slice(12)[e]}`;
         birdDescImg.src = `IMG/${songs.slice(12)[e]}.jpg`
         birdsUnderName.innerHTML = `${birdsEnglish.slice(12)[e]}`
      }else if (nextCount == 3) {
         description.innerHTML = `${birdsInfo.slice(18)[e]}`;
         birdDescImg.src = `IMG/${songs.slice(18)[e]}.jpg`
         birdsUnderName.innerHTML = `${birdsEnglish.slice(18)[e]}`
      }else if (nextCount == 4) {
         description.innerHTML = `${birdsInfo.slice(24)[e]}`;
         birdDescImg.src = `IMG/${songs.slice(24)[e]}.jpg`
         birdsUnderName.innerHTML = `${birdsEnglish.slice(24)[e]}`
      }else if (nextCount == 5) {
         description.innerHTML = `${birdsInfo.slice(30)[e]}`;
         birdDescImg.src = `IMG/${songs.slice(30)[e]}.jpg`
         birdsUnderName.innerHTML = `${birdsEnglish.slice(30)[e]}`
         
      }
   })
      if (e == randomColumn) {

         console.log(randomColumn)
         birdInClammer[e].addEventListener('click', playNoteTrue)
         birdInClammer[e].addEventListener('click', () => {
            nextPageButton.addEventListener('click', nextPageButtonFunction)
            birdInClammer[e].classList.add('green')
            birdImg.src = `IMG/${songs[e]}.jpg`
            birdName.innerHTML = songs[e].toUpperCase();
            if (nextCount == 1) {
               birdImg.src = `IMG/${songs.slice(6)[e]}.jpg`
               birdName.innerHTML = songs.slice(6)[e].toUpperCase();
            } else if (nextCount == 2) {
               birdImg.src = `IMG/${songs.slice(12)[e]}.jpg`
               birdName.innerHTML = songs.slice(12)[e].toUpperCase();
            } else if (nextCount == 3) {
               birdImg.src = `IMG/${songs.slice(18)[e]}.jpg`
               birdName.innerHTML = songs.slice(18)[e].toUpperCase();
            } else if (nextCount == 4) {
               birdImg.src = `IMG/${songs.slice(24)[e]}.jpg`
               birdName.innerHTML = songs.slice(24)[e].toUpperCase();
            } else if (nextCount == 5) {
               birdImg.src = `IMG/${songs.slice(30)[e]}.jpg`
               birdName.innerHTML = songs.slice(30)[e].toUpperCase();
            }
         })
      } else {
         birdInClammer[e].addEventListener('click', playNoteFalse)
         birdInClammer[e].addEventListener('click', () => {
            scoreCount--
            score.innerHTML = `Score: ${scoreCount}`
            if (scoreCount < 0) {
               score.innerHTML = `Score: 0`
            }
            birdInClammer[e].classList.add('enable')
         })
      }
   }
///TRUE FALSE SOUND


let keys = document.querySelectorAll('.birds__item')

function playNoteTrue(e){
   let element = e.target;
   let note = document.querySelector('.birds__list-true')
   note.currentTime = 0;
   note.play()
}
function playNoteFalse(e) {
   let element = e.target;
   let note = document.querySelector('.birds__list-false')
   note.currentTime = 0;
   note.play()
}