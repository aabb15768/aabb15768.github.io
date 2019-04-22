import React from 'react'
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

export default () => {
    return (
        <div className="card mb-4">
            <h1 className="my-4">About<br/>
                <h5>Wellcome to Lee Yen Chun's Resume!</h5>
            </h1>
            <div className="card-body">
                <h2 className="card-title">夢想</h2>
                <p>
                    我的夢想，是，能夠當一名優秀的軟體工程師，希望可以用寫程式這項技能開一家成功的公司，因此以下履歷注重在程式方面。
                </p>

                <h2 className="card-title">小學/國中生活</h2>
                <p>
                    就讀天母國小和天母國中時，跟別人不一樣的地方是，參加了學校的籃球校隊，而籃球是一個團體運動，需要團隊合作才能打出一場好比賽。因此從小我就知道團隊合作
                    的重要性，一個人是沒有辦法做大事情的，我認為在程式的世界裡也是如此，一個好的專案需要各種不同程式專業的人分工合作才能成功。
                </p>

                <h2 className="card-title">高中生活</h2>
                <p>
                    就讀南山高中時，跟別人不一樣的地方是，我曾經休學尋找人生的意義，在高中休學的期間，在網路上做生意，最高一個月賺了將近十萬元，當時因為有詐騙集團介入我跟
                    買方之間，做三方的詐騙交易而跑到嘉義的警局，可能是年紀太小的關係，讓母親很擔心，所以最後放棄了創業回高中唸書。
                </p>

                <h2 className="card-title">大學生活</h2>
                <p>
                    大學參加籃球系隊時，對團隊合作的重要性有更深刻的了解，因為大家都成年了，在合作中比較容易有意見的分歧，也因此，讓我們學習到如何與別人正確的合作、
                    溝通。而大學我也休學了兩年，當中跟朋友一起做過手機周邊的網路拍賣、批貨到店家，後來因為我們上游跟我們有合約衝突，而上了法庭，也因此結束創業，後來
                    遇見了我現在的老婆，我們結婚然後生了一個可愛的女兒，因為有家庭的責任扛在肩上的關係，我又在網路上創業，六個月賺了54萬左右，後來創業中因為技術的問題，
                    認識了一些會寫程式的朋友，自己也買了mac來學swift，後來因為對程式有興趣，加上自己覺得還是要大學畢業，以後才好跟女兒解釋唸書的重要性，因此決定回台大
                    唸書，目標是把程式學好，上了很多跟程式相關的課程（底下會有程式經驗的大項），期間因為壓力與家庭因素得了憂鬱症，一開始並不知道自己病了，後來因為嚴重
                    到無法閱讀，看醫生才診斷出憂鬱症，吃藥過程中很掙扎，終於在大三上的時候狀況越來越好，也因此修了22學分，其中都是資工、電機、資管的課，有兩門是研究所的課
                    都是A+，該學期GPA也達到4.3。
                </p>

                <h2 className="card-title">程式經驗<smaill style={{fontSize:20}}>(2017~現今)</smaill></h2>
                <h4 className="card-title">程式作品</h4>
                <p>
                    <NavLink className="navbar-brand" to="/Project">All programming projects' link</NavLink>
                </p>

                <h4 className="card-title">Rust</h4>
                <p>
                    <a href="https://github.com/aabb15768/StellarSQL">一、2019 實作DBMS like MySQL code連結</a><br/>
                    這個project是我寫程式以來，真正多人團隊分工合作且成功的一個project，在電機系研究所資料庫的課當中評分所有組別第一，我們選擇RUST的原因是，
                    他是一個對記憶體管控相當嚴謹且又能有Ｃ的效率的新興程式語言，例如firefox就是用rust實作的。一開始我們以為實作DBMS很簡單（只有我們選實作DBMS）
                    ，結果一共寫了上萬行的code，才寫出最陽春版本的DBMS，詳細支援的功能以及project說明在github repo裡面有，可以點上面的連結進去參考。
                </p>

                <h4 className="card-title">Python</h4>
                <p>
                    <a href="https://github.com/aabb15768/2018_Computer_Network_HW01">一、2018 IRC Robot code連結</a><br/>
                    利用IRC實作application layer的protocol，讓使用者可以透過IRC與實作的Robot進行communication，支援的功能有：
                    點歌：用爬蟲回傳使用者傳送的歌名的youtube相關連結；星座運勢；猜數字遊戲；對話功能。詳細的功能以及code在上方連結。
                </p>
                <p>
                    <a href="https://github.com/aabb15768/TCP">二、2018 實作TCP protocol code連結</a><br/>
                    實作TCP protocol，包括sender跟receiver，sender，功能為，讓sender傳送一份任意格式檔案給一個會掉封包並隨機偵測sender有沒有
                    實作congestion control等等TCP protocol該有的功能的agent，經由agent（掉封包sender會根據go_back_N重傳）轉傳給receiver，
                    讓receiver收到的檔案跟sender傳的檔案一模一樣，詳細code在上方連結。
                </p>
                <p>
                    <a href="https://github.com/aabb15768/Pacman_AI/tree/master/Search">三、2019 Pacman search code連結</a><br/>
                    UC Berkly artificial intelligence 課程的pacman project，在pacman的環境中實作，bread-first search, depth-first search,
                    uniform search, A star search。
                </p>
                <p>
                    <a href="https://github.com/aabb15768/Pacman_AI/tree/master/multiagent">四、2019 Pacman mutiagent code連結</a><br/>
                    UC Berkly artificial intelligence 課程的pacman project，在pacman的環境中實作，uitility evaluation, mini-max, 
                    alpha-beta pruning, expectimax等AI基礎演算法。
                </p>

                <h4 className="card-title">前端<smaill style={{fontSize:20}}>(Javascript/react生態系/html/css)</smaill></h4>
                <p>
                    <a href="https://github.com/aabb15768/WebProg2019/tree/master/Homework02">一、2019 flappy bird code連結</a><br/>
                    用p5.js module實作flappy bird遊戲，code在上方連結。
                </p>

                <p>
                    <a href="https://github.com/aabb15768/WebProg2019/tree/master/Practice04/own">二、2019 todo_list code連結</a><br/>
                    用facebook研發的技術react來實作todo_list，可以將要做的事情加入到todo_list，然後標記完成與未完成，顯示所有項目，顯示已完成項目，
                    顯示未完成項目，清除所有完成項目等等功能。
                </p>

                <p>
                    <a href="https://github.com/aabb15768/WebProg2019/tree/master/Practice05/own">三、2019 Iphone計算機 code連結</a><br/>
                    用react實作與Iphone內建的計算app一模一樣的網頁前端版本計算機。
                </p>

                <p>
                    <a href="">四、2019 個人履歷 code連結</a><br/>
                    用react與react router實作個人履歷，本網站。
                </p>

                <h4 className="card-title">C++</h4>
                <p>
                    <a href="https://github.com/aabb15768/2017PDMidtermProject/blob/master/PD_midterm_project.cpp">一、2017 孔令傑教授 資管系必修 c++程式設計 midterm project code連結</a><br/>
                    這個midterm project是一個nphard的題目，給定物流中心跟零售店，我們要選擇如何批貨等等讓獲利最大化，這是我寫程式以來第一個團隊合作的project，
                    四個人一組，雖然整份code演算法都是我設計跟寫的。該份code在100多個人當中，獨佔25筆測資獲利最高（總共25筆測資）。會提出這個project的原因是，
                    當初我設計完演算法預計會是optimal solution，結果不是，也找不到原因，而在兩年後資工系開的人工智慧上，學到了hill-climbing這個演算法，才發現
                    我當初想出來的演算法正是hill-climbing的精神，只是當初我並不知道我遇到了local maximum，否則或許會往stochastic-hill-climbing或是simulated
                     annealing的方向發展，找到optimal solution。因為當時學程式兩個月，所以codeing quality還不太成熟。
                </p>
                <p>
                    <a href="https://github.com/aabb15768/2017ICCAD">二、2017 ICCAD 競賽 code連結</a><br/>
                    當初會參加這個競賽主要的原因是，修了電機系李建模的演算法，三個人一組，我跟一個電機所的學長分到一組，另一位同學停修，在期末報告的時候，我跟學長
                    寫的code擊敗了所有跟我們同樣題目的電機系學生（幾乎都是），後來因為學長畢業後暑假要當兵所以沒有繼續往後發展，不然應該是有機會得名的，因為該課
                    程中有組別得名，當初cost比我們還高的。會提出這個project的主要原因是，當初其他組都是用A*在做search來解決問題，但是我自己想出了一個演算法，
                    上面有code，大概的精神是將一個二維平面的矩形的四個頂點都分別設為原點的情況，去用曼哈頓距離根據code當中的演算法來做search，詳細演算法在上面
                    的連結當中src資料夾下，簡單說a*是找optimal solution但我們的演算法不是，所以我們在有限的時間下能找到更少的cost。由於學長程式經驗比我豐富
                    所以這份project讓我學到很多coding style quality相關的習慣、技術。
                </p>
                <p>
                    <a href="https://github.com/aabb15768/MD5_Version_Control">三、2018 使用MD5進行版本控制 code連結</a><br/>
                    這是一個，模擬github版本控制的一個超級陽春版本，<a href="https://systemprogrammingatntu.github.io/mp1/">這是詳細project題目的連結</a>。
                </p>

            </div>
            <div className="card-footer text-muted">
                Posted on April, 21, 2019 by Lee Yen Chun
                <br/><a href="#"> Back to Top</a>
            </div>
        </div>    
    );
};