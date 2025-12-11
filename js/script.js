$(document).ready(function() {
    // Smooth scroll to top when page loads
    $('html, body').animate({ scrollTop: 0 }, 400);

    // Hover animations for interactive elements
    $('.skill-tag, .stat-item, .contact-link, .btn').each(function() {
        $(this).hover(
            function() {
                $(this).css('transform', 'translateY(-3px)');
            },
            function() {
                $(this).css('transform', 'translateY(0)');
            }
        );
    });

    // Add smooth scroll behavior for all internal links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        if (target && target !== '#') {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 100
            }, 600);
        }
    });

    // Add fade-in animation on scroll for sections
    function fadeInOnScroll() {
        $('.resume-section').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    }

    // Initialize sections with starting animation state
    $('.resume-section').css({
        'opacity': '0',
        'transform': 'translateY(20px)',
        'transition': 'all 0.5s ease'
    });

    // Trigger fade-in on scroll
    $(window).on('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Call on page load

    // Add active class to current page nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    $('.nav-link').each(function() {
        const linkPage = $(this).attr('href');
        if (linkPage === currentPage) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
});
