import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
  article=[
    {
    "source": {
    "id": "engadget",
    "name": "Engadget"
    },
    "author": "Devindra Hardawar",
    "title": "Engadget Podcast: Apple’s confounding Studio Display and the great new iPad Air",
    "description": "It’s time to talk about all of those other new Apple gadgets. This week, Engadget Deputy Editor Nathan Ingraham joins Devindra to dive into Apple’s Studio Display, a nice looking 5K monitor that’s really only meant for the Mac faithful. Also, they discuss why…",
    "url": "https://www.engadget.com/engadget-podcast-apple-studio-display-ipad-air-123022577.html",
    "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2020-11/c8e851c0-2b3d-11eb-baea-6c6fe29971fb",
    "publishedAt": "2022-03-25T12:30:22Z",
    "content": "Its time to talk about all of those other new Apple gadgets. This week, Engadget Deputy Editor Nathan Ingraham joins Devindra to dive into Apples Studio Display, a nice looking 5K monitor thats reall… [+1215 chars]"
    },
    {
    "source": {
    "id": "engadget",
    "name": "Engadget"
    },
    "author": "Steve Dent",
    "title": "'Mystery Science Theater 3000' is back on a dedicated streaming platform",
    "description": "The world never run out of bad 'B' movies to mock, apparently, because Mystery Science Theater 3000 (MST3K) is back for a 13th season, Variety has reported. Thanks to a Kickstarter campaign last year that raised $6.52 million, a full 13-episode season of the …",
    "url": "https://www.engadget.com/mystery-science-theater-3000-is-back-on-the-gizmoplex-indie-streaming-platform-070504379.html",
    "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-03/a4c9f120-ac03-11ec-9671-ab8b0407f27c",
    "publishedAt": "2022-03-25T07:05:04Z",
    "content": "The world never run out of bad 'B' movies to mock, apparently, because Mystery Science Theater 3000 (MST3K) is back for a 13th season, Variety has reported. Thanks to a Kickstarter campaign last year… [+1989 chars]"
    },
    {
    "source": {
    "id": "engadget",
    "name": "Engadget"
    },
    "author": "Mat Smith",
    "title": "The Morning After: The inventor of the GIF has died",
    "description": "Continue reading.GIF inventor Stephen Wilhite has died from COVID-19 at the age of 74, NPR has reported. He worked at CompuServe when he developed the Graphics Interchange Format, designed to allow photo transfers over slow modem connections, inventing the fo…",
    "url": "https://www.engadget.com/the-morning-after-the-inventor-of-the-gif-has-died-111813462.html",
    "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-03/550a22e0-ab4a-11ec-badf-02a3bbee2ca1",
    "publishedAt": "2022-03-25T11:18:13Z",
    "content": "Continue reading.GIF inventor Stephen Wilhite has died from COVID-19 at the age of 74, NPR has reported. He worked at CompuServe when he developed the Graphics Interchange Format, designed to allow p… [+3961 chars]"
    },
    {
    "source": {
    "id": "wired",
    "name": "Wired"
    },
    "author": "Morgan Meaker",
    "title": "Europe's Digital Markets Act Takes a Hammer to Big Tech",
    "description": "The EU targets tech giants' walled gardens with aggressive new rules, but the smaller companies the DMA is meant to help are skeptical it will work.",
    "url": "https://www.wired.com/story/digital-markets-act-messaging/",
    "urlToImage": "https://media.wired.com/photos/623dec69d623d151b907c694/191:100/w_1280,c_limit/European-Parliament-Interior-DMA-Decision-Business-183041400.jpg",
    "publishedAt": "2022-03-25T16:30:51Z",
    "content": "Everyone thinks its normal to make a call without knowing which provider the other person is using, says MEP Paul Tang. This should be a common exchange. It's not just because Threema or Signal do no… [+2976 chars]"
    },
    {
    "source": {
    "id": "wired",
    "name": "Wired"
    },
    "author": "Angela Watercutter",
    "title": "This Year’s Oscars Will Be Historic. Will Anyone Care?",
    "description": "The 2022 Academy Awards telecast is expected to have some real (and contrived) firsts. And it’s possible very few people will see it.",
    "url": "https://www.wired.com/story/oscars-history-viewership/",
    "urlToImage": "https://media.wired.com/photos/623d1771c00b3f1ac27cc0ef/191:100/w_1280,c_limit/Oscars-Culture-1235495130.jpg",
    "publishedAt": "2022-03-25T13:00:00Z",
    "content": "The Monitor is aweekly columndevoted to everything happening in the WIRED world of culture, from movies to memes, TV to Twitter.\r\nThe Oscars has had a hard time getting its act together the last few … [+2958 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Reuters Editorial",
    "title": "BVTV: Fee for all - Reuters",
    "description": "Google’s $1.8 trln parent Alphabet will let Spotify use its own payment service, skirting a 15% fee. But it’s just a pilot project and probably still includes a hefty charge. As Liam Proud argues, U.S. and EU regulators may force Google and rival Apple to go …",
    "url": "https://www.reuters.com/video/watch/idRCV00AVUF",
    "urlToImage": "https://static.reuters.com/resources/r/?d=20220325&i=RCV00AVUF&r=RCV00AVUF&t=2",
    "publishedAt": "2022-03-25T14:53:00Z",
    "content": "Posted \r\nGoogles $1.8 trln parent Alphabet will let Spotify use its own payment service, skirting a 15% fee. But its just a pilot project and probably still includes a hefty charge. As Liam Proud arg… [+74 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Analysis: New EU rules regulating U.S. tech giants likely to set global standard - Reuters.com",
    "description": "Landmark EU rules targeting Alphabet <a href=\"https://www.reuters.com/companies/GOOGL.O\" target=\"_blank\">(GOOGL.O)</a> unit Google, Amazon <a href=\"https://www.reuters.com/companies/AMZN.O\" target=\"_blank\">(AMZN.O)</a>, Apple <a href=\"https://www.reuters.com/…",
    "url": "https://www.reuters.com/technology/new-eu-rules-regulating-us-tech-giants-likely-set-global-standard-2022-03-25/",
    "urlToImage": "https://www.reuters.com/resizer/9Ffttu0-0GFQcoTxssDG7-Gz364=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UCCHLGKVZBL3JDCTWAGYJS4CKE.jpg",
    "publishedAt": "2022-03-25T01:42:00Z",
    "content": "BRUSSELS, March 25 (Reuters) - Landmark EU rules targeting Alphabet (GOOGL.O) unit Google, Amazon (AMZN.O), Apple (AAPL.O), Meta (FB.O) and Microsoft (MSFT.O) are likely to set a global benchmark and… [+2995 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Futures edge higher as tech stocks resume climb - Reuters",
    "description": "U.S. stock index futures crept higher on Friday, with beaten-down growth stocks resuming their march higher even as investors grappled with concerns about the Russia-Ukraine conflict and the possibility of bigger interest rate hikes.",
    "url": "https://www.reuters.com/business/futures-edge-higher-tech-stocks-resume-climb-2022-03-25/",
    "urlToImage": "https://www.reuters.com/resizer/DfnptNKMmTIwTaSZ2i6GjMaGBfs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/W7O5QXLG3NNALDHNMY3OKJGTLA.jpg",
    "publishedAt": "2022-03-25T11:27:00Z",
    "content": "March 25 (Reuters) - U.S. stock index futures crept higher on Friday, with beaten-down growth stocks resuming their march higher even as investors grappled with concerns about the Russia-Ukraine conf… [+1837 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Five things to watch at Sunday's Academy Awards ceremony - Reuters",
    "description": "The Academy Awards, Hollywood's annual red-carpet celebration of the movies, takes place on Sunday. Here are five things to watch during the ceremony, which will be broadcast live in the United States on ABC.",
    "url": "https://www.reuters.com/lifestyle/five-things-watch-sundays-academy-awards-ceremony-2022-03-25/",
    "urlToImage": "https://www.reuters.com/resizer/FpixTo4dxkxvnJcqQFKNeQbpeVo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HREBXYGS5NLCXAACFFZB44UUCY.jpg",
    "publishedAt": "2022-03-25T10:16:00Z",
    "content": "LOS ANGELES, March 25 (Reuters) - The Academy Awards, Hollywood's annual red-carpet celebration of the movies, takes place on Sunday. Here are five things to watch during the ceremony, which will be … [+2959 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Phil Harrison",
    "title": "Moon Knight to Slow Horses: the seven best shows to stream this week",
    "description": "Oscar Isaac is Marvel’s trippiest superhero to date, while Gary Oldman and Kristin Scott Thomas star in a new spy thriller about a motley band of MI5 outcasts Continue reading...",
    "url": "https://amp.theguardian.com/tv-and-radio/2022/mar/25/moon-knight-to-slow-horses-the-seven-best-shows-to-stream-this-week",
    "urlToImage": "https://i.guim.co.uk/img/media/b2badf59582415efc4270a6120e114b80ae7bb94/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=694d91cdc63debb018abd55fc82b1740",
    "publishedAt": "2022-03-25T07:00:22Z",
    "content": "Pick of the week\r\nMoon Knight\r\nOscar Isaac as Moon Knight. Photograph: Marvel Studios\r\nPossibly Marvels trippiest offering to date, this series stars Oscar Isaac as Marc Spector, a crime-fighting sup… [+4404 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Catherine Shoard",
    "title": "Big winners and top attendees hang in the balance as Oscar night nears",
    "description": "Hollywood’s showpiece event returns to full capacity on Sunday – but will Coda spring a late surprise? And will everyone pass their Covid test?The Oscars are set to unfold on Sunday night with more drama and tension than at any previous point during this year…",
    "url": "https://amp.theguardian.com/film/2022/mar/25/big-winners-and-top-attendees-hang-in-the-balance-as-oscar-night-nears",
    "urlToImage": "https://i.guim.co.uk/img/media/14c4ec4ebb8ca9723ff63d60ee5b1bffb1d85afd/0_12_2007_1205/master/2007.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0d4f81aee00872486f2ceec0e56bb4fc",
    "publishedAt": "2022-03-25T15:42:28Z",
    "content": "The Oscars are set to unfold on Sunday night with more drama and tension than at any previous point during this years awards race. The attendance of a number of key nominees seems uncertain, includin… [+4405 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Interviews by Georgina Lawton",
    "title": "You be the judge: should my husband start trying new cuisines?",
    "description": "After 63 years of marriage, she wants to try spicy dishes, he wants to stick to meat and two veg. You deliver a verdict on this food fight<ul><li>If you have a disagreement you’d like settled, or want to be part of our jury, click here</li></ul>We’ve been mar…",
    "url": "https://amp.theguardian.com/lifeandstyle/2022/mar/25/you-be-the-judge-should-my-husband-start-trying-new-cuisines",
    "urlToImage": "https://i.guim.co.uk/img/media/623ccc0ee202c3f1eb50d000152214a8388cb71f/0_0_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=59733f13a7644182cbb877d0676b3e2e",
    "publishedAt": "2022-03-25T08:00:22Z",
    "content": "The prosecution: Alice\r\nWeve been married for 63 years and are stuck in a food rut. Its time to try something new\r\nI have been cooking for my husband, Lyndon, for most of my adult life, but after 63 … [+6160 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Hartley Charlton",
    "title": "Upcoming MacBook Air Models Rumored to Feature Two New Display Sizes but Miss Out on Mini-LED Technology",
    "description": "Apple's rumored 13- and 15-inch MacBook Air models will feature new display sizes, but will miss out on mini-LED and ProMotion technology, according to Display Supply Chain Consultants (DSCC) analyst Ross Young.\n\n\n\n\n\nIn a thread on Twitter, Young said that th…",
    "url": "https://www.macrumors.com/2022/03/25/upcoming-macbook-air-to-feature-two-new-sizes/",
    "urlToImage": "https://images.macrumors.com/t/4vr4KcrTyQfMsoTgUCq2TXtwVjQ=/1867x/article-new/2021/11/macbook-air-rounded-mock-grey.jpg",
    "publishedAt": "2022-03-25T14:43:03Z",
    "content": "Apple's rumored 13- and 15-inch MacBook Air models will feature new display sizes, but will miss out on mini-LED and ProMotion technology, according to Display Supply Chain Consultants (DSCC) analyst… [+2026 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Mitchel Broussard",
    "title": "Deals: Get Apple's 1TB 14-Inch MacBook Pro for All-Time Low Price of $2,249 ($250 Off)",
    "description": "Amazon today has the 14-inch MacBook Pro with the M1 Pro/10-core CPU/1TB SSD for $2,249.00, down from $2,499.00. This sale is only available in Silver, and the notebook is shipped and sold directly by Amazon, with stock available today.\n\n\n\nNote: MacRumors is …",
    "url": "https://www.macrumors.com/2022/03/25/deals-1tb-14-inch-macbook-pro/",
    "urlToImage": "https://images.macrumors.com/t/lsozeoZma3g6g06w7woLiHoCNZY=/2672x/article-new/2021/10/14in-MacBook-Pro-Deals-Red-Orange.jpg",
    "publishedAt": "2022-03-25T13:46:58Z",
    "content": "Amazon today has the 14-inch MacBook Pro with the M1 Pro/10-core CPU/1TB SSD for $2,249.00, down from $2,499.00. This sale is only available in Silver, and the notebook is shipped and sold directly b… [+795 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNET"
    },
    "author": "David Lumb",
    "title": "Apple's Next Green Initiative: Making the iPhone SE With Low-Carbon Aluminum - CNET",
    "description": "Making its iPhone SE out of aluminum smelted with reduced carbon emissions is another step toward more sustainable phones.",
    "url": "https://www.cnet.com/tech/mobile/apples-next-green-initiative-making-the-iphone-se-with-low-carbon-aluminum/",
    "urlToImage": "https://www.cnet.com/a/img/resize/dd2ea63455bb79c4931470fbdf61bf6061321dda/2022/03/14/49c00f4b-bb6c-470c-a82a-84f348b00f5e/iphone-se-2022-camera2-macro.jpg?auto=webp&fit=crop&height=630&width=1200",
    "publishedAt": "2022-03-25T00:44:24Z",
    "content": "Kevin Heinz/CNET\r\nApple's latest environmentally friendly endeavor will put more sustainably-made metal in its new iPhone SE models.\r\nThe aluminum, which is used in the metal frame around the sides o… [+702 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Sami Fathi",
    "title": "Tim Cook Reportedly Attending the Oscars on Sunday",
    "description": "Apple CEO Tim Cook will attend the 94th Academy Awards ceremony on Sunday as Apple TV+ is nominated for several Oscar awards, according to the former editor of The Hollywood Reporter and founding partner of Puck, Matthew Belloni.\n\n\n\n\n\nCook's attendance at the…",
    "url": "https://www.macrumors.com/2022/03/25/tim-cook-attending-the-oscars/",
    "urlToImage": "https://images.macrumors.com/t/WFycTYzN2rHk3-OFPqsXGxYurEw=/1841x/article-new/2021/03/tim-cook-apple-park.jpg",
    "publishedAt": "2022-03-25T14:55:38Z",
    "content": "Apple CEO Tim Cook will attend the 94th Academy Awards ceremony on Sunday as Apple TV+ is nominated for several Oscar awards, according to the former editor of The Hollywood Reporter and founding par… [+782 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Hartley Charlton",
    "title": "The MacRumors Show: Rene Ritchie Talks Mac Studio Performance and Studio Display Controversy",
    "description": "Acclaimed Apple content creator Rene Ritchie joins us on The MacRumors Show podcast this week to reflect on the all-new Mac Studio and Studio Display now that users have had a chance to spend some time with the machines.\n\n\n\n\r\nSubscribe to the MacRumors YouTub…",
    "url": "https://www.macrumors.com/2022/03/25/the-macrumors-show-rene-ritchie-talks-mac-studio/",
    "urlToImage": "https://images.macrumors.com/t/NZ8n-AxqdmGfi6DV178meXKqDHY=/3840x/article-new/2022/03/macrumors-show-podcast-thumb-recent-copy.jpg",
    "publishedAt": "2022-03-25T17:18:38Z",
    "content": "Acclaimed Apple content creator Rene Ritchie joins us on The MacRumors Show podcast this week to reflect on the all-new Mac Studio and Studio Display now that users have had a chance to spend some ti… [+1696 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Tim Hardwick",
    "title": "EU Provisionally Agrees on Law That Would Force Apple to Allow Alternative App Stores, Sideloading, and iMessage Interoperability",
    "description": "European lawmakers have provisionally agreed upon a new law that would force Apple to allow user access to third-party app stores and permit the sideloading of apps on iPhones and iPads, among other sweeping changes designed to make the digital sector fairer …",
    "url": "https://www.macrumors.com/2022/03/25/eu-provisionally-agrees-dma-law-apple-app-store/",
    "urlToImage": "https://images.macrumors.com/t/sMSL9x9rGpB0mKcQjyg_5E2d5PQ=/1600x/article-new/2016/01/European-Commisssion.jpg",
    "publishedAt": "2022-03-25T11:46:54Z",
    "content": "European lawmakers have provisionally agreed upon a new law that would force Apple to allow user access to third-party app stores and permit the sideloading of apps on iPhones and iPads, among other … [+4972 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Tim Hardwick",
    "title": "HomePod Mini Launches in Belgium, Netherlands, and Switzerland",
    "description": "Apple today started taking orders for the HomePod mini in Belgium, the Netherlands, and Switzerland for the first time, as spotted by iCulture.\n\n\n\n\n\nApple said earlier this month that it would make the ‌HomePod mini‌ available to order in the above countries …",
    "url": "https://www.macrumors.com/2022/03/25/homepod-mini-belgium-netherlands-switzerland/",
    "urlToImage": "https://images.macrumors.com/t/kQ0rks2mmX--3lnU0mUhIOht5Hc=/2158x/article-new/2021/10/homepod-mini-five-colors.jpg",
    "publishedAt": "2022-03-25T09:45:14Z",
    "content": "Apple today started taking orders for the HomePod mini in Belgium, the Netherlands, and Switzerland for the first time, as spotted by iCulture.\r\nApple said earlier this month that it would make the ‌… [+1092 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "msmash",
    "title": "In Appeal, Apple Argues Epic 'Failed To Prove' Facts of Fortnite Lawsuit",
    "description": "Apple argued in court papers this week that appeals filings by Epic Games don't point to legal errors by a US District Court judge who ruled last year that the iPhone maker hadn't violated antitrust laws with its App Store. Instead, Apple cited the many times…",
    "url": "https://apple.slashdot.org/story/22/03/25/1642238/in-appeal-apple-argues-epic-failed-to-prove-facts-of-fortnite-lawsuit",
    "urlToImage": "https://a.fsdn.com/sd/topics/apple_64.png",
    "publishedAt": "2022-03-25T16:45:00Z",
    "content": "\"On the facts and the law, the court correctly decided every issue presented in Epic's appeal,\" Apple lawyers wrote in the company's filing. They repeated earlier arguments that Epic is attempting to… [+1294 chars]"
    }
    ]
    constructor(){
      super();
      this.state={
        articles:this.article
      }
    }
    async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=0f422d94684048759b3ae0f2ed13f3fb";
     let data =await fetch(url);
     let parsedData= await data.json()
    //  console.log(parsedData);
     this.setState({articles:parsedData.articles})
    }
  render() {
    return (
      <div className='container-fluid'>
        <div className="container my-3">
            <h1>NewsPanda-Top Headlines</h1>
            </div>
            <div className="row">
              {this.state.articles.map((element)=>{
                 return <div className="col-md-4" key={element.urlToImage}>
                 <NewsItem  title={element.title} description={element.description}  imgUrl={element.urlToImage} newsUrl={element.url}/>
                 </div>
              })}
             
              
            
           
            </div>
        

      </div>
    )
  }
}

export default News

