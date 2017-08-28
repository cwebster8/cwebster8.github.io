
var global = {};

(function()  {
    function PictureStream() {
        this.min = 1; // Check this
        this.currentIndex = 294;
        this.speed = 10000;
        this.timerId;
        this.setImage();
    }

    PictureStream.prototype.launch = function() {
       this.timerId = setInterval(_.bind(this.setImage, this), this.speed);
    }

    PictureStream.prototype.setImage = function() {
        var paddedIndexString = "0000000000" + this.currentIndex.toString();
        var indexString = paddedIndexString.slice(-9);
        var src = "https://s3.amazonaws.com/whatwonder.com/images/blushing-75kb/blushing" + indexString + ".jpg";
        
        $('#picture').attr('src', src);

        this.currentIndex--;
        this.currentIndex = (this.currentIndex < this.min ? 294 : this.currentIndex); 
        console.log(this.currentIndex);
    }

    PictureStream.prototype.stopStream = function() {
        clearInterval(this.timerId);
    }

    global.PictureStream = PictureStream;
})();
