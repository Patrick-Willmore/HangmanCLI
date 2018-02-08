function Letter(char){
    this.char = char.toLowerCase();
    this.isVisible = false;

}

Letter.prototype.showAnswer = function(){
    return this.char;
};

Letter.prototype.showChar = function(){
    if (this.isVisible === true){
        return this.char;
    }
    return "_";
};

Letter.prototype.isUserCorrect = function(charPlayer) {
    if(this.char === charPlayer.toLowerCase()){
        this.isVisible = true;
        return true;
    } 
    return false;
    
};

module.exports = Letter;