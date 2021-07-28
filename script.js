// Recuperation of the DOM elements
let end = document.querySelector('#end');
let finish = document.querySelector('#finish');
let showNumber = document.querySelector('#showNumber');
let correction_true = document.querySelector('#correction_true');
let correction_false = document.querySelector('#correction_false');
let question = document.querySelector('#question');


// List of questions, proposals and aswer of the quiz
const questions = [['Combien d\'étoiles sont présentes sur le drapeau des Etats Unis ?',
 '49', '50', '51', '52', '50', '50 étoiles sont présente sur le drapeau des Etats Unis'],
['De quelle ville française le "cannelé" est-il une spécialité ? ?',
 'Lyon', 'Marseille', 'Paris', 'Bordeaux', 'Bordeaux', 'Le cannelé est originaire de bordeaux'],
['Qui a dit : « Le sort en est jeté » (Alea jacta est) ?',
 'Attila', 'César', 'Vercingétorix', 'Auguste', 'César', 'C\'est César qui a prononcé la phrase "Alea jacta est" (le sort en est jeté)'],
['Où peut-on croiser "Le papillon Hercule" ?',
 'Au Brésil', 'Au canada',  'En chine', 'En Australie', 'Au Brésil','Il est possible de croiser "Le papillon Hercule" au Brésil'],
['Quel pays a remporté la coupe du monde de football en 2014 ?',
 'L\'Argentine', 'L\'Italie', 'L\'Allemagne', 'Le Brésil', 'L\'Allemagne', "C\'est l'Allemagne qui a remporté la coupe de football en 2014"],
['Quel célèbre peintre a peint la Joconde ?', 'Picasso', 'De Vinci', 'Dali', 'Monet','De Vinci',
'Léonard de Vinci a peint la Joconde aux alentours de l\'année 1506'],
['A qui doit-on la chanson "Earth Song" ?','Ray Charles', 'Chuck Berry', 'Michael Jackson', 'Elvis Presley', 'Michael Jackson',
'Michael Jackson a chanter Earth song qui est sortie en 1982'],
['Quel est le gratte ciel le plus haut jamais construit ?', 'Willis Tower', 'Pentominium', 'Zifeng Tower', 'Burj Khalifa',
'Burj Khalifa', 'Le Burj Khalifa et le gratte ciel le plus haut du monde et mesure 828 mètres de haut'],
['Dans quelle ville d\'Espagne peut on voir le bâtiment "Sagrada Familia"',
'Barcelone', 'Saint Sébastian', 'Madrid', 'Séville', 'Barcelone', 'La Sagarda Familia ce trouve a Barcelone'],
['Parmi ces propositions, laquelle est un synonyme du mot "simple"','Manière', 'Fier', 'Elémentaire', 'Hautain', 'Elémentaire',
'"Elémentaire" est un synonyme de "simple"']];

//Declaration of variables
let i = 0;
let score = 0;
let correct = [];
let wrong = [];
let used = [];

let block = document.querySelector('#block');

// The starting section disappears and the quiz section appears
start.addEventListener('click', () => {
    $('#containerStart').css('display','none');
    $('.container').css('display','block');
    $('h3').css('margin-top','40px');
    $('#block').css('margin-bottom', '0');

    const TL = gsap.timeline({paused:true});

    TL
    .from(block, 1, {transform: "scale(0)", ease: "power2.out"}, '-=2')

    TL.play();
})

change();

// Event clicks on each buttons
const buttons = document.querySelectorAll('.button');
for(const button of buttons) {
    button.addEventListener('click', (event) => {
        const choice = event.target.innerHTML;
        console.log(choice);
        // Score incrementation and responses put in their tab
        if(choice == answer){
            score ++;
            correct.push("Question " + i + " :<br>Votre réponse : " + choice +
            "<br>La bonne réponse : " + questions[i-1][6] + "<br><br>");

        }else {
            wrong.push("Question " + i + " :<br>Votre réponse : " + choice +
            "<br>La bonne réponse : " + questions[i-1][6] + "<br><br>");
        }

        change();
    
    });
}

function change() {
    // Check the score finally
    if(i >= questions.length){

        $('h1').css('border-radius', '20px 20px 0 0')
        $('.container').css('display','none');
        $('#finish').css('display', 'block');
        $('#end').css('display', 'block');

        const TL = gsap.timeline({paused:true});

        TL
        .from('#finish', 1, {transform: "scale(0)", ease: "power2.out"}, '-=2')

        TL.play();

        if(score == questions.length){
            end.innerHTML = "Incroyable ! <br>Votre score est de " + score + " sur " + questions.length;
            check();
        }
        else if(score > questions.length / 2){
            end.innerHTML = "Pas mal<br>Votre score est de " + score + " sur " + questions.length;
            check();
        
        }
        else if(score == 0){
            end.innerHTML = "Vraiment nul !<br>Votre score est de " + score + " sur " + questions.length;
            check();
        
        }
        else{
            end.innerHTML = "Pas terrible...<br>Votre score est de " + score + " sur " + questions.length;
            check();
        }
    
    }
    else{
        //A display of the questions and proposals in the game
        getCurrentQuestion = questions[i][0];
        question.innerHTML = getCurrentQuestion;

        btn1.innerHTML = questions[i][1];
        btn2.innerHTML = questions[i][2];
        btn3.innerHTML = questions[i][3];
        btn4.innerHTML = questions[i][4];

        // Follow-up to the question number
        showNumber.innerHTML = "Question " + [i+1] + " sur " + questions.length;

        answer = questions[i][5];
        i++;

    }
}

function check(){
    $('h1').css('margin-top', '20px');
    correction_true.innerHTML = correct.join('');
    correction_false.innerHTML += wrong.join('');
}
