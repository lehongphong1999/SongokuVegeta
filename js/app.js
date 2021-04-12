var app = new Vue({
    el: '#app',
    data:{
        playerHealthSgk : 100,
        playerHealthVgt : 100,
        gameIsRunning: false,
        turnsSgk:[],
        dameTurnSgk: 0,
        turnsVgt:[],
        dameTurnVgt: 0,
        Stt:[],
        healingTurnSgk: 0,
        healingTurnVgt: 0,
        i:0
    },
    methods:{
        startNewGame: function(){
            this.gameIsRunning = true;
            this.playerHealthSgk = 100;
            this.playerHealthVgt = 100;
            this.turnsSgk = [],
            this.turnsVgt = [],
            this.Stt = [],
            this.i=0
        },
        attack: function(){
            
            if(this.playerHealthSgk > 0 && this.playerHealthVgt > 0 )
            {
                //Turn
                this.increaAutoI();
                //Songoku
                this.dameTurnSgk = this.randomDame(10,0)
                this.playerHealthSgk -= this.dameTurnSgk;
                this.turnsSgk.unshift({
                     textLog : 'Tấn công : -  ' + this.dameTurnSgk
                    });

                //Vegeta
                this.dameTurnVgt = this.randomDame(10,0)
                this.playerHealthVgt -= this.dameTurnVgt;
                this.turnsVgt.unshift({
                    textLog : 'Tấn công : - ' + this.dameTurnVgt
                   });
                if(this.playerHealthSgk <= 0 )
                {
                    this.playerHealthSgk = 0;
                     //Check Option player
                    if(this.checkOptionPlayer())
                    {
                        return;
                    }
                }
                else if(this.playerHealthVgt <= 0 )
                {
                    this.playerHealthVgt = 0;
                     //Check Option player
                    if(this.checkOptionPlayer())
                    {
                        return;
                    }
                }
            }
        },
        attackSpecial: function(){
            this.attackSpecial();
        },
        healing: function(){
            var timesHealing = 1;
            if(timesHealing > 0){
                if(this.playerHealthSgk <= 80 && this.playerHealthVgt <= 80 )
                {
                    //Turn
                    this.increaAutoI();
                    //Songoku
                    this.healingTurnSgk = this.randomDame(20,10);
                    this.playerHealthSgk += this.healingTurnSgk
                    this.turnsSgk.unshift({
                     textLog : 'Hồi máu : + ' + this.healingTurnSgk
                    });

                    //Vegeta 
                    this.healingTurnVgt = this.randomDame(20,10);
                    this.playerHealthVgt += this.healingTurnVgt
                    this.playerHealthVgt += this.randomDame(20,10);
                    this.turnsVgt.unshift({
                        textLog : 'Hồi máu : + ' + this.healingTurnVgt
                       });
                }
                else
                {
                    alert('Không thể dùng khi còn trên 80hp')
                }
                timesHealing--;
            }
            else{
                alert('Bạn đã sử dụng hồi máu mất rồi ):')
            }    
        },
        giveUp: function(){
            if(confirm('Bạn thật sự muốn nhận thua :'))
            {
                this.gameIsRunning = false;
                alert('Bạn là kẻ thua cuộc :( Thật nhục nhã !!!')
                if(confirm('Bạn có muốn phục thù ? Bắt đầu lại ?'))
                {
                    this.startNewGame();
                }else
                {
                    this.gameIsRunning = false;
                }
            }
        },
        randomDame: function(maxDame,minDame){
            return Math.floor(Math.random() * ( maxDame - minDame + 1)) + minDame;
        },
        checkOptionPlayer: function(){
            if(this.playerHealthSgk<=0)
            {   
                this.resetTextLog();
                if(confirm('Vegeta Chiến thắng !!!, Bắt đầu lại ?'))
                {
                    
                    this.startNewGame();
                }else
                {
                    this.gameIsRunning = false;
                }
                return true;
            }
            else if(this.playerHealthVgt<=0)
            {   
                this.resetTextLog();
                if(confirm('Songoku Chiến thắng !!!, Bắt đầu lại ?'))
                {
                    
                    this.startNewGame();
                }else
                {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return;
        },
        increaAutoI: function(){
            this.i++;   
                this.Stt.unshift({textLog: this.i});

        },
        attackSpecial: function(){
            if(this.playerHealthSgk > 0 && this.playerHealthVgt > 0 )
            {
                //Turn
                this.increaAutoI();
                //Songoku
                this.dameTurnSgk = this.randomDame(10,0)
                this.playerHealthSgk -= this.dameTurnSgk;
                this.turnsSgk.unshift({
                     textLog : 'Kỹ năng: - ' + this.dameTurnSgk
                    });

                //Vegeta
                this.dameTurnVgt = 20;
                this.playerHealthVgt -= this.dameTurnVgt;
                this.turnsVgt.unshift({
                    textLog : 'Kỹ năng: - ' + this.dameTurnVgt
                   });
                if(this.playerHealthSgk <= 0 )
                {
                    this.playerHealthSgk = 0;
                    if(this.checkOptionPlayer())
                    {
                        return;
                    }
                }
                else if(this.playerHealthVgt <= 0 )
                {
                    this.playerHealthVgt = 0;
                    if(this.checkOptionPlayer())
                    {
                        return;
                    }
                }
            }
        },
        resetTextLog: function(){
        this.turnsSgk = [],
        this.turnsVgt = [],
        this.Stt = [],
        this.i=0
        },
    }   
});