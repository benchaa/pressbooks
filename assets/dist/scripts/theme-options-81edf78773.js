jQuery(function(e){e(".select2").select2(),e(document).ready(function(){e("#pdf_page_width, #pdf_page_height").parent().parent().hide(),e("#pdf_page_size").change(function(){var a=e("#pdf_page_size").val();switch(a){case"1":e("#pdf_page_width").val("5.5in").parent().parent().hide(),e("#pdf_page_height").val("8.5in").parent().parent().hide();break;case"2":e("#pdf_page_width").val("6in").parent().parent().hide(),e("#pdf_page_height").val("9in").parent().parent().hide();break;case"3":e("#pdf_page_width").val("8.5in").parent().parent().hide(),e("#pdf_page_height").val("11in").parent().parent().hide();break;case"4":e("#pdf_page_width").val("8.5in").parent().parent().hide(),e("#pdf_page_height").val("9.25in").parent().parent().hide();break;case"5":e("#pdf_page_width").val("5in").parent().parent().hide(),e("#pdf_page_height").val("7.75in").parent().parent().hide();break;case"6":e("#pdf_page_width").val("4.25in").parent().parent().hide(),e("#pdf_page_height").val("7in").parent().parent().hide();break;case"7":e("#pdf_page_width").val("21cm").parent().parent().hide(),e("#pdf_page_height").val("29.7cm").parent().parent().hide();break;case"8":e("#pdf_page_width").val("14.8cm").parent().parent().hide(),e("#pdf_page_height").val("21cm").parent().parent().hide();break;case"9":e("#pdf_page_width").val("5in").parent().parent().hide(),e("#pdf_page_height").val("8in").parent().parent().hide();break;case"10":e("#pdf_page_width").val("").parent().parent().fadeToggle(),e("#pdf_page_height").val("").parent().parent().fadeToggle()}})})});