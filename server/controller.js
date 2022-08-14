
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Failure is the path", "You aren't as good looking as your mom says you are", "Dont play leap frog with a unicorn", "I see money in your future, its not yours though", "borrow money from pessimists, they don't expect it back"]

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex];

        res.status(200).send(randomFortunes);
    },

    getPopUp: (req, res) => {
        let url = "https://www.hdwallpaper.nu/wp-content/uploads/2015/02/maxresdefault.jpg"

        res.status(200).send(url)
    },

    putAttempt: (req,res) => {
        const str = "Buttons are easy"
        res.status(200).send(str)
    },

    postBtnExample: (req, res) => {
        const str = "My post attempt"
        res.status(200).send(str)
    }
}