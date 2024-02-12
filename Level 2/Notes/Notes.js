// DOM (Document Object Model) => HTML ke kisi bhi element ko select karke change kar paana.

                            //  Change karne ke poore process mein :-
                               
                            //   Selection
                              var home = document.querySelector("#home");


                            //   CSS change (Kuch bhi change kar sakte hai)
                              // home.style.color="red";
                              // home.style.backgroundColor="green";
                              // home.style.fontSize="100px";
                              // home.style.fontFamily="arial";


                            //   HTML change
                              // home.innerHTML="How are you ?";


                            //   text change
                              // home.textContent="<h1>Tum kaise ho ?</h2>";


                            //   adding listeners
                             home.addEventListener('mouseenter', function(){
                                home.style.color="red";
                                home.style.fontSize="100px";
                             })

                             home.addEventListener('mouseleave', function(){
                                home.style.color="black";
                                home.style.fontSize="16px";
                             })