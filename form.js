class Form{
    constructor(){
        // create title
        this.title = createElement('h1');

        // create the detailInfo form
        this.input = select("#nameInput");
        this.email = select("#emailInput");
        this.class = select("#classInput");
        this.section = select("#sectionInput");
        this.roll = select("#rollInput");
        // create the heading of the form
        this.text = createElement('h1',"Let's do a survey on our school students");
        
        //create the questions and answers 

        //question1         
        this.question1 = createElement('h2',"1. Do you think that the school authority needs to build more buildings in order to accomodate every student from N-II till Class-XII?");
        this.greeting1 = createElement('h3',"Your Answer:");
        this.answer1 = createInput();
        // this.radio1 = createRadio('h3',"Answer:");
        // this.radio1.option('Yes');
        // this.radio1.option('No');
        // this.radio1.option("I don't know");

        //question2
        this.question2 = createElement('h2',"2. Do you think that the washrooms or toilets should be more frequently cleaned?");
        this.greeting2 = createElement('h3',"Your Answer:");
        this.answer2 = createInput();
        // this.radio2 = createRadio('h3');
        // this.radio2.option('Yes');
        // this.radio2.option('No');
        // this.radio2.option("I don't know");

        //question3
        this.question3 = createElement('h2',"3. Do you think that the doors of the washrooms or toilets should be fixed?");
        this.greeting3 = createElement('h3',"Your Answer:");
        this.answer3= createInput();
        // this.radio3 = createRadio('h3');
        // this.radio3.option('Yes');
        // this.radio3.option('No');
        // this.radio3.option("I don't know");

        //question4
        this.question4 = createElement('h2',"4. Do you think that the teachers who are joining should be thoroughly interviewed?");
        this.greeting4 = createElement('h3',"Your Answer:");
        this.answer4 = createInput();
        // this.radio4 = createRadio('h3');
        // this.radio4.option('Yes');
        // this.radio4.option('No');
        // this.radio4.option("I don't know");

        //question5
        this.question5 = createElement('h2',"5. Should there be a regular check up of the electrical equipments (fans,lights,etc) in the classroom?");
        this.greeting5= createElement('h3',"Your Answer:");
        this.answer5 = createInput();
        // this.radio5 = createRadio('h3');
        // this.radio5.option('Yes');
        // this.radio5.option('No');
        // this.radio5.option("I don't know");

        //question6
        this.question6 = createElement('h2',"6. Should the school authority open a channel for contact which would include school's e-mail, phone number and other details for contacting?");
        this.greeting6 = createElement('h3',"Your Answer:");
        this.answer6 = createInput();
        // this.radio6 = createRadio('h3');
        // this.radio6.option('Yes');
        // this.radio6.option('No');
        // this.radio6.option("I don't know");

        // create the submit button
        this.button1 = createButton('Submit');

        // create the vote button
        this.button2 = createButton('Vote');

        // greet the voter
        this.greeting = createElement('h3');
    }

    hide(){
        // hide the detail info input
        this.input.hide();
        this.email.hide();
        this.class.hide();
        this.section.hide();
        this.roll.hide();
        // hide the questions
        this.question1.hide();
        this.question2.hide();
        this.question3.hide();
        this.question4.hide();
        this.question5.hide();
        this.question6.hide();
        // hide the answer titles
        this.greeting1.hide();
        this.greeting2.hide();
        this.greeting3.hide();
        this.greeting4.hide();
        this.greeting5.hide();
        this.greeting6.hide();
        // hide the answer inputs
        this.answer1.hide();
        this.answer2.hide();
        this.answer3.hide();
        this.answer4.hide();
        this.answer5.hide();
        this.answer6.hide();
        // hide the buttons
        this.button1.hide();
        this.button2.hide();
        
        this.text.html("Thanks for your vote. Your votes has been added to our system");
        
    }

    display(){
        // position the title
        this.title.html("School Development Vote");
        this.title.position(130,0);

        // position the submit button
        this.button1.position(500,160);

        this.button1.mousePressed(()=>{
            vote.updateState(1);
            voter.name = this.input.value();
            voter.email = this.email.value();
            voter.class = this.class.value();
            voter.section = this.section.value();
            voter.roll = this.roll.value();
            voterCount+=1;
            voter.index = voterCount
            voter.updateCount(voterCount);
            voter.update();
        })

        // position the vote button
        this.button2.position(50,1400)

        this.button2.mousePressed(()=>{
            if(voteState===0){
                voter.name = this.input.value();
                voter.email = this.email.value();
                voter.class = this.class.value();
                voter.section = this.section.value();
                voter.roll = this.roll.value();
                voterCount+=1;
                voter.index = voterCount
                voter.updateCount(voterCount);
                voter.update();
                }
            var ans1 = this.answer1.value();
            var ans2 = this.answer2.value();
            var ans3 = this.answer3.value();
            var ans4 = this.answer4.value();
            var ans5 = this.answer5.value();
            var ans6 = this.answer6.value();
            answer.push(ans1,ans2,ans3,ans4,ans5,ans6);
            voter.updateResult(answer);
            vote.updateState(0);
            this.hide();            
        })

       
        
    }
}
