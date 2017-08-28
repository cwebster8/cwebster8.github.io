
var global = {};

(function()  {
    function PictureStream() {
        this.max = 9958; // Check this
        this.currentIndex = 700;
        this.speed = 6000;
        this.timerId;
        this.setImage();
    }

    PictureStream.prototype.launch = function() {
       this.timerId = setInterval(_.bind(this.setImage, this), this.speed);
    }

    PictureStream.prototype.setImage = function() {
        var paddedIndexString = "00000" + this.currentIndex.toString();
        var indexString = paddedIndexString.slice(-5);
        var src = "https://s3.amazonaws.com/whatwonder.com/images/blushing/blushing" + indexString + ".jpg";
        
        $('#picture').attr('src', src);

        this.currentIndex++;
        this.currentIndex = (this.currentIndex > this.max ? 628 : this.currentIndex); 
        console.log(this.currentIndex);
    }

    PictureStream.prototype.stopStream = function() {
        clearInterval(this.timerId);
    }

    global.PictureStream = PictureStream;
})();
