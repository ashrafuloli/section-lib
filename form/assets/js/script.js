(function ($) {

    'use strict';


    $('.input-label input').on('focusin', function () {
        $(this).parent().addClass('active');
    });

    $('.input-label input').on('focusout', function () {
        if (!this.value) {
            $(this).parent().removeClass('active');
        }
    });

    $('.drag-upload').bs_dropzone({
        preview: true,
        dropzoneTemplate: `
		<div class="bs-dropzone">
			<div class="bs-dropzone-area"></div>
			<div class="bs-dropzone-message"></div>
			<div class="bs-dropzone-preview"></div>
		</div>
		`,
        parentTemplate: '<div class="row"></div>',
        childTemplate: '<div class="col-6"></div>',
        language: {
            emptyText: '[Drop File Here or Click To Upload]',
            dragText: '[Drop File Here]',
            dropText: '[_t_ File(s)]'
        },
        change: function (element, files) {
            console.log(files);
            // alert(files.length + ' File(s)');
        }
    });

    $(".open-datepicker").datetimepicker();


})(jQuery);
