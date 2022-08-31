$(document).ready(function () {
  showQuote();

  $("#generatequote").on("click", function () {
    showQuote();
  });

  function showQuote() {
    var quotes = [
      "I'm afraid when yoour heart's involved, it all comes out in moron. ^Lorelai Gilmore",
      "Relationships need verbs. ^Lorelai Gilmore",
      "But marriage is not always about being happy. It's about compromise. ^Emily Gilmore",
      "It was a great kiss. If one of us had been a frog, it would have had some serious impressive consequences. ^Lorelai Gilmore",
      "Mom, you've given me everything I need. ^Rory Gilmore",
      "I don't know if she ever realized the person I most wanted to be was her. ^Rory Gilmore",
      "It's my responsibility as your best friend to make sure you do exciting things even when don't want to. ^Sookie St James",
      "People can live a hundred years without really living for a minute. ^Logan Huntzberger",
      "I need caffine. Whatever form you've got it. I haven't had any all day. I'll drink it, shoot it, eat it, snort it, whatever form it's in, gimmie. ^Lorelai Gilmore",
      "Oh, I can't stop drinking the coffee. I stop drinking the coffee, and I stop doing the standing, walking, and words putting into sentence doing. ^Lorelai Gilmore",
      "You offer nothing to women or the world in general. ^Paris Geller",
      "I can scare the stupid out of you, but the lazy runs deep. ^Paris Geller",
      "That's a tiptoe through the tulips compared with what you're going to find beyond these walls. ^Paris Geller, A Year in the Life",
      "I am not your mother or your hugger. If you need some love, get a hooker. If you're having a bad day, find a ledge or a way to deal. My door is not open to you. Ever. ^Paris Geller",
      "Lawyers waste time and money. They’re needless middlemen who slither into people’s lives when they’re at their most vulnerable so they can clamp on and suck like leeches until everyone but them is distraught and penniless. ^Luke Danes",
      "Please, there is no fate. There is no fate. There is no destiny. There is no luck. Astrology is ridiculous. Tarot cards tell you nothing. You cannot read a palm. Tea leaves make tea and nothing else. Jim Morrison is not hanging out with Elvis, and the Kennedy’s did not kill Marilyn. ^Luke Danes",
      "The counter is MY scared space! You don’t do yoga on the Dalai Lama’s mat, and you don’t come behind my counter, period! ^Luke Danes",
      "You could have witnessed something good for your mother who, yes, has screwed up a bit in her life but now seems to have found something to make her happy, and you miss that, you refuse to be a part of that, you are going to be very sorry. ^Luke Danes",
      "I don't know. I don't know what to ask after you've been hit by a deer. ^Lane Kim",
      "But this is the cut-down version. I mean, just from the letter A, I excluded AC/DC, the Animals, and A-Ha, footnoted as a guilty pleasure. ^Lane Kim",
      "I think this is amazing! Because I want to do more than just drum. I would like to write and compose and I was wondering if we could sit down sometime and just talk about music, because I think you have so much you can pass on to me. ^Lane Kim",
      "You Climb Up Here With Me, It’s One Less Minute You Haven’t Lived. ^Logan Huntzberger",
      "If I Saw Me Doing This, I’d Beat The Crap Out Of Myself. ^Logan Huntzberger",
      "You Never Really Needed Rescuing, Ace. You Know That. ^Logan Huntzberger",
      "You can use your mother's old golf clubs. They're upstairs, gathering dust, along with the rest of her potential. ^Emily Gilmore",
      "Hold on, I'm looking up 'aneurysm' in our medical dictionary to see if I just had one. ^Emily Gilmore",
      "Ah, how McDonald's of you. ^Emily Gilmore",
      "Young man, I don't know where that's been, but I can say with absolute certainty it won't be going anywhere near my mouth. ^Emily Gilmore",
      "At least she has a husband to kill. ^Emily Gilmore",
      "Don't be a martyr... And don't be naive. Do you think I love the boy who got my daughter pregnant? ^Richard Gilmore",
      "Look, it's getting late, so either shoot us or go away. ^Richard Gilmore",
      "Everyone knows ugly men make the best doctors. ^Richard Gilmore",
      "She has more to do, more to be! I don't want that life for her! ^Richard Gilmore",
      "It takes a remarkable person to inspire all of this. ^Richard Gilmore",
      "You know, I think I hung my Tool t-Shirt next to my Metallica t-Shirt and they don't really get along. ^Jess Mariano",
      "I can't concentrate with your annoying midget voice yammering on and on. It's like having Stuart Little shoved in my ear. ^Jess Mariano",
      "I was just walking by and the thing came out of nowhere and bam! beaked me right in the eye. ^Jess Mariano",
      "I’m going to a serious school now, I need serious paper. ^Rory Gilmore",
      "Life’s been pretty good to you. It was your turn for a few curveballs. Peeks and valleys, kid. ^Lorelai Gilmore, A Year in the Life",
      "I'm not broken. Maybe just a little chipped. ^Lorelai Gilmore, A Year in the Life",
      "God, you're like a pop-up book from hell! ^Rory Gilmore",
      "You never socialized me properly, I should hate you right now. Do something to make me hate you. ^Rory Gilmore",
      "I'm gonna have to quit drinking coffee! And I love coffee! I really love coffee! ^Rory Gilmore",
      "You can't watch Willy Wonka without massive amount of junk food. ^Lorelai Gilmore",
      "If you're going to throw your life away, he'd better have a motorcycle. ^Lorelai Gilmore",
      "My mother is fast asleep in my bed, clutching my Hello Kitty pillow, and yes, I have pictures. ^Lorelai Gilmore",
      "Seventy-five thousand dollars? Oh my God, that's like 150 pairs of Jimmy Choos. ^Lorelai Gilmore",
    ];

    var index = Math.floor(Math.random() * (quotes.length + 1));
    var entry = quotes[index];
    entry = entry.split("^");
    $("#quoteContainer").empty();
    $("#quoteContainer").html(
      "<div><p class='quote'>" +
        entry[0] +
        "</p><p class='quote author'>-- " +
        entry[1] +
        "</p></div>"
    );
  }
});
