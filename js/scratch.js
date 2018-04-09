 $(document).ready(function () {
            var lastSection = '';
            var sectionList = $('.navbar').find('a');
            var sectionItems = sectionList.map(function () {
                var x = $($(this).attr('href'));
                if (x.length) {
                    return x;
                }
            })

            $('a[href^="#"]').on('click', function (e) {
                e.preventDefault();
                var sectionId = $(this).attr('href');
                var fromTop = $(sectionId).offset().top;
                $('html, body').stop().animate({
                    scrollTop: fromTop
                }, 1000);
            })

            $(window).scroll(function () {
                var fromTop = $(this).scrollTop() + 10;

                var currentSection = sectionItems.map(function () {
                    if ($(this).offset().top < fromTop) return this;
                })
                currentSection = currentSection[currentSection.length - 1];
                var id = currentSection && currentSection.length ? currentSection[0].id : "";

                if (lastSection !== id) {
                    lastSection = currentSection;
                    console.log(lastSection);
                    sectionList.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
                }

            })
        })

