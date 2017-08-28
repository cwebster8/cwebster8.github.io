
var global = {};

(function()  {
    function PictureStream() {
        this.max = 3300; // Check this
        this.currentIndex = 0;
        this.speed = 3500;
        this.timerId;
        this.setImage();
    }

    PictureStream.prototype.launch = function() {
       this.timerId = setInterval(_.bind(this.setImage, this), this.speed);
    }

    PictureStream.prototype.setImage = function() {
        var paddedIndexString = "0000" + this.currentIndex.toString();
        var indexString = paddedIndexString.slice(-4);
        var src = "https://s3.amazonaws.com/whatwonder.com/images/bieber/bieber" + indexString + ".jpg";
        
        $('#picture').attr('src', src);

        this.currentIndex++;
        this.currentIndex = (this.currentIndex > this.max ? 0 : this.currentIndex); 
        console.log(this.currentIndex);
    }

    PictureStream.prototype.stopStream = function() {
        clearInterval(this.timerId);
    }

    global.PictureStream = PictureStream;
})();
