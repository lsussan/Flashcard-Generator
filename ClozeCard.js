var ClozeCard = function(text, cloze) {
    this.cloze = cloze;
    this.fullText = text;
    this.partial = this.fullText.replace(this.cloze, "....")
}

ClozeCard.prototype.printCloze = function() {
    if (this.partial === this.fullText) {
        console.log("oops!\n" + this.cloze + " \nIs not the correct answer match -------> " + this.fullText)
    } else {
        console.log(this.partial)
    }
};

var firstPresidentCloze = new ClozeCard("George Washington was the first president of United States", "George Washington")
firstPresidentCloze.printCloze()

var brokenCloze = new ClozeCard("Was the first president of United States", "Barack Obama")
brokenCloze.printCloze()

console.log(firstPresidentCloze.fullText);

module.exports = ClozeCard;