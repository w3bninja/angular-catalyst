var core = core || {};

(function($, o) {
    /* DOM may not be ready */

    o.foo = "foo";
    o.bar = function(){
        return "bar";
    };

    $(function() {
    	/* DOM is ready */
        console.log("DOM ready.")
    });

}(jQuery, core));