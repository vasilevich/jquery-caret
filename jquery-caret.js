(function ($) {
    $.fn.getCursorPosition = function () {
        const input = this.get(0);
        if (!input) return; // No (input) element found
        if ('selectionStart' in input) {
            // Standard-compliant browsers
            return input.selectionStart;
        } else if (document.selection) {
            // IE
            input.focus();
            const sel = document.selection.createRange();
            const selLen = document.selection.createRange().text.length;
            sel.moveStart('character', -input.value.length);
            return sel.text.length - selLen;
        }
    };
    $.caretTo = function (el, index) {
        if (el.createTextRange) {
            const range = el.createTextRange();
            range.move("character", index);
            range.select();
        } else if (el.selectionStart != null) {
            el.focus();
            el.setSelectionRange(index, index);
        }
    };
    $.fn.caretTo = function (index, offset) {
        return this.queue(function (next) {
            if (isNaN(index)) {
                let i = $(this).val().indexOf(index);

                if (offset === true) {
                    i += index.length;
                } else if (offset) {
                    i += offset;
                }
                $.caretTo(this, i);
            } else {
                $.caretTo(this, index);
            }

            next();
        });
    };
    $.fn.caretToStart = function () {
        return this.caretTo(0);
    };

})(jQuery);