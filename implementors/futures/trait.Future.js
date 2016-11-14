(function() {var implementors = {};
implementors["tokio_timer"] = ["impl <a class='trait' href='https://docs.rs/futures/0.1/futures/trait.Future.html' title='futures::Future'>Future</a> for <a class='struct' href='tokio_timer/struct.Sleep.html' title='tokio_timer::Sleep'>Sleep</a>","impl&lt;F, E&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/trait.Future.html' title='futures::Future'>Future</a> for <a class='struct' href='tokio_timer/struct.Timeout.html' title='tokio_timer::Timeout'>Timeout</a>&lt;F&gt; <span class='where'>where F: <a class='trait' href='https://docs.rs/futures/0.1/futures/trait.Future.html' title='futures::Future'>Future</a>&lt;Error=E&gt;, E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='enum' href='tokio_timer/enum.TimeoutError.html' title='tokio_timer::TimeoutError'>TimeoutError</a>&gt;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
