/* ***** BEGIN LICENSE BLOCK *****
 * Version: MIT/X11 License
 * 
 * Copyright (c) 2013 Girish Sharma
 * 
 * Permission is hereby granted, free of charge, to any person obtaining copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Contributor:
 *   Girish Sharma <scrapmachines@gmail.com> (Creator)
 *
 * ***** END LICENSE BLOCK ***** */
 
"use strict";
let global = this;

const {classes: Cc, interfaces: Ci, utils: Cu} = Components;

const ICON_CLOSE = "chrome://critiques/skin/icon16.png";
const ICON_OPEN = "chrome://critiques/skin/icon16.png";
const BACKGROUND_NOISE = "data:image/png;base64,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";
const XHTML = "http://www.w3.org/1999/xhtml";

let MOVIE_URL = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=";
let MOVIE_URL_IMDB = "http://api.rottentomatoes.com/api/public/v1.0/movie_alias.json?apikey=";

Cu.import("resource://gre/modules/AddonManager.jsm");
Cu.import("resource://gre/modules/Services.jsm");
Cu.import("resource://gre/modules/XPCOMUtils.jsm");

let gAddon, apiIndex = -1;

// Global reload function
let reload = function() {};

let AjaxManager = {
  openRequests: {},

  get: function(url, callback) {
    let req = Cc["@mozilla.org/xmlextras/xmlhttprequest;1"]
                .createInstance(Ci.nsIXMLHttpRequest);

    let id = Date.now() + "" + Math.random()*100000;
    req.onload = function () {
      AjaxManager.openRequests[id] = null;
      delete AjaxManager.openRequests[id];
      callback(req.responseText);
    };

    AjaxManager.openRequests[id] = req;
    req.open('GET', url, true);
    req.send(null);
  },

  closePending: function() {
    for (let req in AjaxManager.openRequests) {
      AjaxManager.openRequests[req].abort();
    }
    AjaxManager.openRequests = null;
    AjaxManager.openRequests = {};
  }
};

function Critiques(aWindow) {
  this.chromeWin = aWindow;
  this.chromeDoc = aWindow.document;
  this.position = JSON.parse(pref("JSONrect"));

  // Bind!!!
  this.onPopupShown = this.onPopupShown.bind(this);
  this.onPanelHiding = this.onPanelHiding.bind(this);
  this.onPanelShown = this.onPanelShown.bind(this);
  this.onButtonClick = this.onButtonClick.bind(this);
  this.panelDragStart = this.panelDragStart.bind(this);
  this.panelDrag = this.panelDrag.bind(this);
  this.panelDragEnd = this.panelDragEnd.bind(this);
  this.getMovieInfoFor = this.getMovieInfoFor.bind(this);
  this.saveToolbarButtonInfo = this.saveToolbarButtonInfo.bind(this);
  this.buildLinks = this.buildLinks.bind(this);
  this.getSelection = this.getSelection.bind(this);
  this.buildMovieSuggestionList = this.buildMovieSuggestionList.bind(this);
  this.autocompletePanelPress = this.autocompletePanelPress.bind(this);

  // movie rating methods
  this.loadMainResult = this.loadMainResult.bind(this);
  this.loadMCRating = this.loadMCRating.bind(this);
  this.getMCLinkFor = this.getMCLinkFor.bind(this);
  this.getMovieListFor = this.getMovieListFor.bind(this);
  this.getIMDBInfoFromAPI = this.getIMDBInfoFromAPI.bind(this);
  this.getIMDBDescFromID = this.getIMDBDescFromID.bind(this);
  this.getIMDBInfoFromID = this.getIMDBInfoFromID.bind(this);
  this.loadContentWithAnimation = this.loadContentWithAnimation.bind(this);
  this.startLoadingAnimation = this.startLoadingAnimation.bind(this);
  this.loadRTRatingForIMDB = this.loadRTRatingForIMDB.bind(this);
  this.displayOrWait = this.displayOrWait.bind(this);

  this.os = {
    linux: this.chromeWin.navigator.oscpu.search(/linux/i) > -1,
    mac: this.chromeWin.navigator.oscpu.search(/mac/i) > -1,
    windows: this.chromeWin.navigator.oscpu.search(/windows/i) > -1,
  };
  this._init();
}

Critiques.prototype = {

  _init: function Critiques__init() {

    if (this.position.width == 0 || this.position.height == 0) {
      this.position.width = 475;
      this.position.height = 304;
      pref("JSONrect", JSON.stringify(this.position));
    }

    this.dragStart = {
      x: -1,
      y: -1,
      height: -1,
      width: -1,
    }

    this.panelDragOffset = {
      x: 0,
      y: 0,
    }

    this.buildButton();
    this.createHotKey();
    this.addMenuItem();
    this.buildPanel();
  },
  destroy: function Critiques_destroy() {
    // Clearing the memory.
    this.destroyButton();
    this.removeMenuItem();
    this.removeKey();
    this.panel.hidePopup();
    this.panel.parentNode.removeChild(this.panel);
    this.panel = null;
  },
  /* ---------- Movie Info ----------- */
  resetMovieInfo: function() {
    AjaxManager.closePending();
    [this.desc, this.links, this.movieInfo, this.imdbInfo, this.rtInfo, this.metaInfo].forEach(function(t) {
      while (t.firstChild) t.removeChild(t.firstChild);
    });
    this.movieInfo.parentNode.style.opacity = 0;
    this.movieInfo.parentNode.style.MozTransform = "translate(25px, 0px) rotateY(10deg)";
    this.desc.style.opacity = 0;
    this.moviePoster.style.opacity = 0;
    this.desc.style.MozTransform = "translate(25px, 0px) rotateY(10deg)";
    this.moviePoster.style.MozTransform = "translate(-25px, 0px) rotateY(-10deg)";
    this.moviePoster.src = "";
    this.movieList.state == "shown" && this.movieList.hidePopup();
    this.panel.firstChild.lastChild.style.background = "none";
    this.lastSearchedMovie = "";
    this.onlyIMDB = false;
    this.notDisplayed = true;
    this.waitingToDisplay = false;
    this.fromSuggestions = false;
    this.alreadyDoneForRest = false;
  },
  startLoadingAnimation: function() {
    this.notDisplayed = true;
    this.waitingToDisplay = false;
    this.panel.firstChild.lastChild.style.background =
      "url('chrome://critiques/skin/loading.gif') no-repeat center center";
  },
  displayOrWait: function() {
    if (this.notDisplayed && !this.waitingToDisplay) {
      this.waitingToDisplay = true;
      this.chromeWin.setTimeout(function() {
        if (this.notDisplayed) {
          this.loadContentWithAnimation();
          this.notDisplayed = false;
          this.waitingToDisplay = false;
        }
      }.bind(this), 500);
    }
    else if (this.notDisplayed && this.waitingToDisplay) {
      this.loadContentWithAnimation();
      this.notDisplayed = false;
      this.waitingToDisplay = false;
    }
  },
  loadContentWithAnimation: function() {
    this.panel.firstChild.lastChild.style.background = "none";
    this.movieInfo.parentNode.style.opacity = 1;
    this.moviePoster.style.opacity = 1;
    this.moviePoster.style.MozTransform = "translate(0px, 0px) rotateY(0deg)";
    this.movieInfo.parentNode.style.MozTransform = "translate(0px, 0px) rotateY(0deg)";
  },
  getMovieInfoFor: function Critiques_getMovieInfoFor(name) {
    this.resetMovieInfo();
    if (name == "") {
      return;
    }
    if (name[0] == "@") {
      this.onlyIMDB = true;
      name = name.replace(/^@/, "");
    }
    if (name.match(/\([0-9]{4}\)/)) {
      let year = name.match(/\(([0-9]{4})\)/)[1];
      name = encodeURIComponent(name.replace(/\([0-9]{4}\)/, "").trim());
      this.startLoadingAnimation();
      this.getMovieListFor(name, year, function(response) {
        let list = JSON.parse(response.trim());
        if (!list.Search) {
          this.resetMovieInfo();
          return;
        }
        this.buildLinks();
        this.alreadyDoneForRest = true;
        if (this.onlyIMDB) {
          this.fromSuggestions = true;
          this.getIMDBInfoFromID(list.Search[0].imdbID);
        }
        else {
          this.getMCLinkFor(list.Search[0].Title, list.Search[0].Year);
          this.getIMDBInfoFromID(list.Search[0].imdbID);
          this.loadRTRatingForIMDB(list.Search[0].imdbID);
        }
      }.bind(this));
    }
    else {
      name = encodeURIComponent(name);
      this.buildLinks();
      this.startLoadingAnimation();
      if (this.onlyIMDB) {
        this.getMovieListFor(name, null, function(response) {
          let list = JSON.parse(response.trim());
          if (!list.Search) {
            this.resetMovieInfo();
            return;
          }
          this.alreadyDoneForRest = true;
          this.fromSuggestions = true;
          this.getIMDBInfoFromID(list.Search[0].imdbID);
        }.bind(this));
      }
      else {
        this.loadRTRating(name);
      }
    }

    // MetaCritic Rating & Load Link using GoogleJSONUrl
    //this.getMCLinkFor(name);
    //this.getIMDBInfoFromAPI(name);
  },
  getMovieListFor: function(name, year, callback) {
    if (name.length < 2 || name == this.lastSearchedMovie)
      return;
    this.lastSearchedMovie = name;
    AjaxManager.closePending();
    AjaxManager.get("http://www.omdbapi.com/?s=" + name +
                    (year != null ? "&y=" + year: ""), callback);
  },
  buildLinks: function() {
    let (imdb = this.chromeDoc.createElement("label")) {
      imdb.setAttribute("value", "IMDB");
      imdb.setAttribute("accesskey", "I");
      imdb.setAttribute("class", "text-link");
      this.links.appendChild(imdb);
    }
    if (this.onlyIMDB)
      return;

    let (rt = this.chromeDoc.createElement("label")) {
      rt.setAttribute("value", "Rotten Tomatoes");
      rt.setAttribute("accesskey", "R");
      rt.setAttribute("class", "text-link");
      this.links.appendChild(rt);
    }
    let (mc = this.chromeDoc.createElement("label")) {
      mc.setAttribute("value", "Metacritic");
      mc.setAttribute("accesskey", "M");
      mc.setAttribute("class", "text-link");
      this.links.appendChild(mc);
    }
  },
  buildMovieSuggestionList: function(list) {
    while (this.movieList.firstChild.lastChild &&
           this.movieList.firstChild.childNodes.length + list.length > 5)
      this.movieList.firstChild.removeChild(this.movieList.firstChild.lastChild);

    let movie = null;
    let length = list.length;
    while (movie = list[--length]) {
      let (item = this.chromeDoc.createElement("richlistitem")) {
        let name = this.chromeDoc.createElement("label");
        name.setAttribute("value", movie.Title);
        name.setAttribute("style", "max-width: 190px; color: #ccc;");
        name.setAttribute("crop", "right");
        item.appendChild(name);
        let spacer = this.chromeDoc.createElement("spacer");
        spacer.setAttribute("flex", "1");
        item.appendChild(spacer);
        let year = this.chromeDoc.createElement("label");
        year.setAttribute("value", movie.Year);
        year.setAttribute("style", "color: #ccc;");
        item.appendChild(year);
        item.setAttribute("IMDB", movie.imdbID);
        item.setAttribute("style", "min-width: 100%");
        if (this.movieList.firstChild.firstChild) {
          this.movieList.firstChild.insertBefore(item,
            this.movieList.firstChild.firstChild);
        }
        else {
          this.movieList.firstChild.appendChild(item);
        }
      }
      list.pop();
    }
    if (this.movieList.state != "open") {
      this.movieList.openPopup(this.movieName, "after_start");
      this.movieList.firstChild.clearSelection();
    }
  },
  loadMCRating: function(url) {
    AjaxManager.get(url, function (response) {
      try {
        let _metaScore = /property=\"v:average\">([0-9]{2,3})<\//;
        let _metaCount = /property=\"v:count\">([0-9,]{1,4})<\//;
        let rating = _metaScore.exec(response)[1];
        let count = _metaCount.exec(response)[1];

        if (rating == null || rating == "")
          rating = "N/A";
        else
          rating += "/100";

        if (rating == null || rating == "")
          count = "based on 0 Critic review";
        else
          count = "based on " + count + " Critics' reviews";

        let (txt = this.chromeDoc.createElement("label")) {
          txt.setAttribute("style", "color: #ddd !important; font-size: 20px;" +
                                    "font-weight: 400; text-decoration: none !important;");

          txt.setAttribute("value", rating);
          txt.setAttribute("tooltiptext", count);
          this.metaInfo.appendChild(txt);
        }
        let (txt = this.chromeDoc.createElement("label")) {
          txt.setAttribute("value", "Metacritic MetaScore");
          txt.setAttribute("style", "color: #ccc !important; font-size: 12px;");
          this.metaInfo.appendChild(txt);
        }
      } catch(ex) {}
    }.bind(this));
  },
  getMCLinkFor: function(title, year) {
    let url = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&rsz=1&q="+title;
    if (year != null) {
      url += "+(" + year + ")";
    }
    url += "+site%3Ametacritic.com/movie";
    if (this.mcRetry == undefined || this.mcRetry == null)
      this.mcRetry = 0;
    AjaxManager.get(url, function (response) {
      try {
        let myURL = JSON.parse(response).responseData.results[0].url;
        if (myURL && myURL.length > 0) {
          this.links.lastChild.setAttribute("href", myURL);
          this.loadMCRating(myURL);
        }
      } catch(ex){
        if (this.mcRetry != null && this.mcRetry++ < 5)
          this.getMCLinkFor(title, year);
        else
          this.mcRetry = null;
      }
    }.bind(this));
  },
  loadRTRating: function(name) {
    AjaxManager.get(MOVIE_URL + name, function (response) {
      let results = JSON.parse(response.trim());
      if (results.movies && results.movies.length > 0)
        this.loadMainResult(results.movies[0]);
    }.bind(this));
  },
  loadRTRatingForIMDB: function(ID) {
    AjaxManager.get(MOVIE_URL_IMDB + ID.replace(/^tt/, ""), function (response) {
      let result = JSON.parse(response.trim());
      if (result)
        this.loadMainResult(result);
    }.bind(this));
  },
  loadMainResult: function(movie) {
    if (movie == null)
      return;

    if (!this.alreadyDoneForRest) {
      this.getMCLinkFor(movie.title, movie.year);

      if (movie.alternate_ids && movie.alternate_ids.imdb &&
          movie.alternate_ids.imdb.length > 4) {
        this.getIMDBInfoFromID("tt" + movie.alternate_ids.imdb);
      }
      else {
        this.getIMDBInfoFromAPI(movie.title, movie.year);
      }
    }

    this.alreadyDoneForRest = false;

    if (!this.fromSuggestions) {
      let (title = this.chromeDoc.createElement("label")) {
        title.setAttribute("value", movie.title);
        title.setAttribute("style", "color: #eee !important; font-size: 26px;" +
                                    "font-weight: 400; text-decoration: none !important;");
        this.movieInfo.appendChild(title);
      }
      let (year = this.chromeDoc.createElement("label")) {
        year.setAttribute("value", new Date(movie.release_dates.theater).toLocaleDateString());
        year.setAttribute("tooltiptext", "Theater Release Date");
        year.setAttribute("style", "bottom: 0px !important; position: relative;" +
                                   "color: #ccc !important; font-size: 16px;");
        this.movieInfo.appendChild(year);
      }
      this.moviePoster.setAttribute("src", movie.posters.detailed);
    }
    this.fromSuggestions = false;

    this.links.firstChild.setAttribute("tooltiptext", movie.title + "'s Imdb Page");
    this.links.firstChild.nextSibling.setAttribute("tooltiptext", movie.title + "'s Rotten Tomatoes Page");
    this.links.lastChild.setAttribute("tooltiptext", movie.title + "'s Metacritic Page");

    this.links.firstChild.nextSibling.setAttribute("href", movie.links.alternate);

    let (rtHeading = this.chromeDoc.createElement("label")) {
      rtHeading.setAttribute("value", "Rotten Tomatoes(R) Scores");
      rtHeading.setAttribute("style", "color: #ccc !important; font-size: 14px;");
      this.rtInfo.appendChild(rtHeading);
    }
    let (rtCont = this.chromeDoc.createElement("hbox")) {
      let (cri = this.chromeDoc.createElement("vbox")) {
        let (txt = this.chromeDoc.createElement("label")) {
          txt.setAttribute("style", "color: #ddd !important; font-size: 20px;" +
                                    "font-weight: 400; text-decoration: none !important;");
          if (movie.ratings.critics_score > 0)
            txt.setAttribute("value", movie.ratings.critics_score + " %");
          else
            txt.setAttribute("value", "N/A");
          if (movie.ratings.critics_rating)
            txt.setAttribute("tooltiptext", movie.ratings.critics_rating);
          cri.appendChild(txt);
        }
        let (txt = this.chromeDoc.createElement("label")) {
          txt.setAttribute("value", "Critics Rating");
          txt.setAttribute("style", "color: #ccc !important; font-size: 12px;");
          cri.appendChild(txt);
        }
        rtCont.appendChild(cri);
      }
      let (aud = this.chromeDoc.createElement("vbox")) {
        let (txt = this.chromeDoc.createElement("label")) {
          txt.setAttribute("style", "color: #ddd !important; font-size: 20px;" +
                                    "font-weight: 400; text-decoration: none !important;");
          if (movie.ratings.audience_score > 0)
            txt.setAttribute("value", movie.ratings.audience_score + " %");
          else
            txt.setAttribute("value", "N/A");
          if (movie.ratings.audience_rating)
            txt.setAttribute("tooltiptext", movie.ratings.audience_rating);
          aud.appendChild(txt);
        }
        let (txt = this.chromeDoc.createElement("label")) {
          txt.setAttribute("value", "Audience Rating");
          txt.setAttribute("style", "color: #ccc !important; font-size: 12px;");
          aud.appendChild(txt);
        }
        rtCont.appendChild(aud);
      }
      rtCont.setAttribute("style", "width: 100%;");
      this.rtInfo.appendChild(rtCont);
    }
    this.displayOrWait();
  },
  getIMDBInfoFromAPI: function(title, year) {
    let url = "http://www.deanclatworthy.com/imdb/?q=" + title;
    if (year != null)
      url += "&year=" + year;
    AjaxManager.get(url, function (response) {
      let result = JSON.parse(response);
      let rating = result.rating || 0;
      let votes = (result.votes || 0) + " votes";
      let link = result.imdburl;
      this.links.firstChild.setAttribute("href", link);
      if (!rating || rating == 0)
        rating = 'N/A';

      let (txt = this.chromeDoc.createElement("label")) {
        txt.setAttribute("style", "color: #ddd !important; font-size: 20px;" +
                                  "font-weight: 400; text-decoration: none !important;");

        txt.setAttribute("value", rating);
        txt.setAttribute("tooltiptext", votes);
        this.imdbInfo.appendChild(txt);
      }
      let (txt = this.chromeDoc.createElement("label")) {
        txt.setAttribute("value", "IMDB Rating");
        txt.setAttribute("style", "color: #ccc !important; font-size: 12px;");
        this.imdbInfo.appendChild(txt);
      }
      this.getIMDBDescFromID(result.imdbid);
    }.bind(this));
  },
  getIMDBInfoFromID: function(ID) {
    let url = "http://www.omdbapi.com/?i=" + ID;
    let link = "http://www.imdb.com/title/" + ID + "/";
    this.links.firstChild.setAttribute("href", link);
    AjaxManager.get(url, function (response) {
      let result = JSON.parse(response);
      let synopsis = unescape(result.Plot || "");
      let rating = (result.imdbRating || 0) + "/10";
      let votes = (result.imdbVotes || 0) + " votes";
      if (!rating || rating == 0)
        rating = 'N/A';

      if (this.fromSuggestions) {
        if (result.Poster)
          this.moviePoster.setAttribute("src", result.Poster);
        let (title = this.chromeDoc.createElement("label")) {
          title.setAttribute("value", result.Title);
          title.setAttribute("style", "color: #eee !important; font-size: 26px;" +
                                      "font-weight: 400; text-decoration: none !important;");
          this.movieInfo.appendChild(title);
        }
        let (year = this.chromeDoc.createElement("label")) {
          year.setAttribute("value", result.Released);
          year.setAttribute("tooltiptext", "Theater Release Date");
          year.setAttribute("style", "bottom: 0px !important; position: relative;" +
                                     "color: #ccc !important; font-size: 16px;");
          this.movieInfo.appendChild(year);
        }
      }

      let (txt = this.chromeDoc.createElement("label")) {
        txt.setAttribute("style", "color: #ddd !important; font-size: 20px;" +
                                  "font-weight: 400; text-decoration: none !important;");
        txt.setAttribute("value", rating);
        txt.setAttribute("tooltiptext", votes);
        this.imdbInfo.appendChild(txt);
      }
      let (txt = this.chromeDoc.createElement("label")) {
        txt.setAttribute("value", "IMDB Rating");
        txt.setAttribute("style", "color: #ccc !important; font-size: 12px;");
        this.imdbInfo.appendChild(txt);
      }
      let (desc = this.chromeDoc.createElement("label")) {
        desc.textContent =  (synopsis || "").length < 300 ? (synopsis || "") : synopsis.substring(0, 297) + "...";
        desc.setAttribute("style", "color: #ccc; max-width:" + this.movieInfo.boxObject.width + "px");
        this.desc.appendChild(desc);
        this.desc.style.opacity = 1;
        this.desc.style.MozTransform = "translate(0px, 0px) rotateY(0deg)";
      }
      this.displayOrWait();
    }.bind(this));
  },
  getIMDBDescFromID: function(ID) {
    let url = "http://www.omdbapi.com/?i=" + ID;
    AjaxManager.get(url, function (response) {
      let synopsis = unescape(JSON.parse(response).Plot || "");

      let (desc = this.chromeDoc.createElement("label")) {
        desc.textContent =  (synopsis || "").length < 300 ? (synopsis || "") : synopsis.substring(0, 297) + "...";
        desc.setAttribute("style", "color: #ccc; max-width:" + this.movieInfo.boxObject.width + "px");
        this.desc.appendChild(desc);
        this.desc.style.opacity = 1;
        this.desc.style.MozTransform = "translate(0px, 0px) rotateY(0deg)";
      }
      this.displayOrWait();
    }.bind(this));
  },
  autocompletePanelPress: function(event) {
    if (event.button && event.button == 0 ||
        event.keyCode == event.DOM_VK_ENTER ||
        event.keyCode == event.DOM_VK_RETURN) {
      if (this.movieList.state == "open") {
        if (this.movieList.firstChild.selectedItem) {
          let title = this.movieList.firstChild.selectedItem.firstChild.value;
          let year = this.movieList.firstChild.selectedItem.lastChild.value;
          let imdb = this.movieList.firstChild.selectedItem.getAttribute("IMDB");
          this.movieList.hidePopup();
          event.stopPropagation();
          event.preventDefault();
          this.resetMovieInfo();
          this.alreadyDoneForRest = true;
          this.fromSuggestions = true;
          this.buildLinks();
          this.startLoadingAnimation();
          this.getMCLinkFor(title, year);
          this.getIMDBInfoFromID(imdb);
          this.loadRTRating(title);
          this.movieName.value = title;
        }
      }
    }
    else if ((event.keyCode == event.DOM_VK_UP &&
             this.movieList.firstChild.selectedIndex == 0) ||
             (event.keyCode == event.DOM_VK_DOWN &&
              this.movieList.firstChild.selectedIndex ==
                this.movieList.firstChild.childNodes.length - 1)) {
      event.preventDefault();
      event.stopPropagation();
      this.movieList.firstChild.selectedIndex = -1;
      this.movieList.firstChild.clearSelection();
      this.movieList.firstChild.currentIndex = -1;
      this.movieName.focus();
    }
  },
  /* ---------- UI builders ---------- */
  buildPanel: function Critiques_buildPanel() {
    this.panel = this.chromeDoc.createElement("panel");
    this.panel.id = "critiques-panel";
    this.panel.setAttribute("noautofocus", true);
    this.panel.setAttribute("noautohide", true);
    this.panel.setAttribute("level", "floating");
    this.panel.setAttribute("orient", "vertical");

    this.panel.setAttribute("style",
                            "border-radius: 4px !important; border:1px solid #111;" +
                            "-moz-appearance:none; background: rgb(53,67,82);" +
                            "min-width: 400px; min-height: 300px");

    this.chromeDoc.querySelector("#mainPopupSet").appendChild(this.panel);

    // Left/Upper box containing the color and zoom information
    let (wrapper = this.chromeDoc.createElement("vbox")) {
      wrapper.setAttribute("flex", "1");
      wrapper.setAttribute("style", "min-width: 100%; min-height: 100%;" +
                                    "width: 100%; height: 100%;" +
                                    "background: url('" + BACKGROUND_NOISE + "');");
      let (topToolbar = this.chromeDoc.createElement("toolbar")) {
        topToolbar.setAttribute("class", "devtools-toolbar");
        topToolbar.setAttribute("style", "min-width: 100%;border-bottom: 1px solid rgb(20,30,39) !important;");

        // Movie Name
        this.movieName = this.chromeDoc.createElement("textbox");
        this.movieName.setAttribute("class", "devtools-searchinput");
        this.movieName.setAttribute("placeholder", "Type Movie Name and press Enter");
        this.movieName.setAttribute("type", "search");
        this.movieName.setAttribute("searchbutton", true);

        this.movieName.style.width = "250px";
        topToolbar.appendChild(this.movieName);
        listen(this.chromeWin, this.movieName, "command", function() {
          this.getMovieInfoFor(this.movieName.value);
        }.bind(this), false);

        listen(this.chromeWin, this.movieName, "input", function() {
          this.getMovieListFor(this.movieName.value, null, function(response) {
            let list = JSON.parse(response.trim());
            if (list.Search)
              this.buildMovieSuggestionList(list.Search.slice(0,5));
          }.bind(this));
        }.bind(this), false);

        listen(this.chromeWin, this.movieName, "keypress", function(event) {
          if (event.keyCode == event.DOM_VK_UP) {
            this.movieList.firstChild.focus();
            this.movieList.firstChild.currentIndex =
              this.movieList.firstChild.selectedIndex =
              this.movieList.firstChild.childNodes.length - 1;
          }
          else if (event.keyCode == event.DOM_VK_DOWN) {
            this.movieList.firstChild.focus();
            this.movieList.firstChild.currentIndex =
              this.movieList.firstChild.selectedIndex = 0;
          }
          else if (event.keyCode == event.DOM_VK_ENTER ||
                   event.keyCode == event.DOM_VK_RETURN) {
            this.movieList.state == "open" && this.movieList.hidePopup();
          }
        }.bind(this), false);

        let (spacer = this.chromeDoc.createElement("spacer")) {
          spacer.setAttribute("flex", "1");
          spacer.setAttribute("style", "cursor:move");
          topToolbar.appendChild(spacer);
          listen(this.chromeWin, spacer, "mousedown", this.panelDragStart, true);
          listen(this.chromeWin, this.chromeWin, "mousemove", this.panelDrag, true);
          listen(this.chromeWin, this.chromeWin, "mouseup", this.panelDragEnd, true);
        }
        // Close button
        this.closeButton = this.chromeDoc.createElement("toolbarbutton");
        this.closeButton.className = "devtools-closebutton";
        this.closeButton.onclick = this.onButtonClick.bind(this);
        topToolbar.appendChild(this.closeButton);
        wrapper.appendChild(topToolbar);
      }

      // Movie info wrapper
      let imageWrapper = this.chromeDoc.createElement("hbox");
      imageWrapper.setAttribute("style", "min-height: 100%; height: 100%;" +
                                         "-moz-perspective: 500px;" +
                                         "-moz-perspective-origin:left top;");
      imageWrapper.setAttribute("flex", "1");
      let posterWrapper = this.chromeDoc.createElement("vbox");
      posterWrapper.setAttribute("style", "-moz-perspective: 500px;" +
                                          "-moz-perspective-origin:right top;");
      this.moviePoster = this.chromeDoc.createElement("image");
      this.moviePoster.setAttribute("style", "margin:10px;min-width:160px;max-width:160px;" +
                                             "-moz-transform:translate(-25px, 0px) rotateY(-10deg);" +
                                             "-moz-transform-origin:100% 0px;" +
                                             "-moz-transition: opacity 400ms ease-in," +
                                             "-moz-transform 300ms ease-in;opacity: 0;");
      posterWrapper.appendChild(this.moviePoster);
      let (spacer = this.chromeDoc.createElement("spacer")) {
        spacer.setAttribute("flex", "1");
        posterWrapper.appendChild(spacer);
      }
      imageWrapper.appendChild(posterWrapper);

      let infoWrapper = this.chromeDoc.createElement("vbox");
      infoWrapper.setAttribute("flex", "1");
      infoWrapper.setAttribute("style", "width: 100%; height: 100%;opacity: 0;" +
                                        "-moz-transform:translate(25px, 0px) rotateY(10deg);" +
                                        "-moz-transform-origin:0px 0px;" +
                                        "-moz-transition: opacity 400ms ease-in," +
                                        "-moz-transform 300ms ease-in;");
      this.movieInfo = this.chromeDoc.createElement("vbox");
      this.links = this.chromeDoc.createElement("hbox");
      this.desc = this.chromeDoc.createElement("vbox");
      this.desc.setAttribute("flex" ,"1");
      this.desc.setAttribute("style", "opacity: 0;" +
                                      "-moz-transform:translate(25px, 0px) rotateY(10deg);" +
                                        "-moz-transform-origin:0px 0px;" +
                                      "-moz-transition: opacity 400ms ease-in," +
                                      "-moz-transform 300ms ease-in;");
      let metaImdb = this.chromeDoc.createElement("hbox");
      metaImdb.setAttribute("stlye", "margin-top: 10px");
      this.metaInfo = this.chromeDoc.createElement("vbox");
      this.imdbInfo = this.chromeDoc.createElement("vbox");
      this.rtInfo = this.chromeDoc.createElement("vbox");
      this.rtInfo.setAttribute("style", "margin: 10px 0;");
      infoWrapper.appendChild(this.movieInfo);
      infoWrapper.appendChild(this.links);
      infoWrapper.appendChild(this.desc);
      infoWrapper.appendChild(this.rtInfo);
      metaImdb.appendChild(this.imdbInfo);
      metaImdb.appendChild(this.metaInfo);
      infoWrapper.appendChild(metaImdb);

      imageWrapper.appendChild(infoWrapper);
      wrapper.appendChild(imageWrapper);
      this.panel.appendChild(wrapper);
    }
    let (list = this.chromeDoc.createElement("panel")) {
      list.setAttribute("noautofocus", true);
      list.setAttribute("orient", "vertical");
      list.setAttribute("style", "border:1px solid rgb(10,100,200);-moz-appearance:none;" +
                                 "background: rgba(53,67,82,0.9);min-width: 250px;")
      let (richList = this.chromeDoc.createElement("richlistbox")) {
        richList.setAttribute("maxheight", "300");
        richList.setAttribute("seltype", "single");
        richList.setAttribute("style", "-moz-appearance:none;background:rgba(0,0,0,0);" +
                                       "border-width: 0px !important;min-width: 240px;" +
                                       "max-width: 240px;");
        listen(this.chromeWin, richList, "keypress", this.autocompletePanelPress.bind(this), false);
        listen(this.chromeWin, richList, "click", this.autocompletePanelPress.bind(this), false);
        list.appendChild(richList);
      }
      this.movieList = list;
      this.panel.appendChild(list);
    }
    listen(this.chromeWin, this.panel, "popuphiding", this.onPanelHiding, false);
    listen(this.chromeWin, this.panel, "popupshown", this.onPanelShown, false);
  },
  onPanelShown: function Critiques_onPanelShown() {
    this.movieName.focus();
    if (this.target) {
      let link = this.target.href;
      this.target = null;
      if (link.match(/imdb\.com\/title\/tt/)) {
        let ID = link.match(/imdb\.com\/title\/(tt[0-9]+)\/?/)[1];
        let url = "http://www.omdbapi.com/?i=" + ID;
        AjaxManager.get(url, function (response) {
          let title = JSON.parse(response).Title;
          this.movieName.value = title;
          this.getMovieInfoFor(title);
        }.bind(this));
      }
      else {
        let url = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&rsz=1&q=site%3A" + encodeURIComponent(link);
        AjaxManager.get(url, function (response) {
          let title = JSON.parse(response).responseData.results[0].title;
          if (title && title.length > 0) {
            if (link.match("imdb.com")) {
              title = title.replace(/(\([0-9]{4}\)\s)?-\sIMDb$/i, "").trim();
            }
            else if (link.match("metacritic")) {
              title = title.split("Reviews,")[0].trim();
            }
            else if (link.match("rottentomatoes")) {
              title = title.replace(/-\sRotten\sTomatoes$/i, "").trim();
            }
            else
              return;
            this.movieName.value = title;
            this.getMovieInfoFor(title);
          }
        }.bind(this));
      }
    }
    else {
      let selectedText = this.getSelection();
      if (selectedText.length > 0 && selectedText.length < 200) {
        this.movieName.value = selectedText;
        this.getMovieInfoFor(selectedText);
      }
    }
  },
  onPanelHiding: function Critiques_onPanelHiding(e) {
    if (e.target != this.panel)
      return;
    // Saving the preferences.
    this.position.top = this.panel.boxObject.y - 9;
    this.position.left = this.panel.boxObject.x - 1;
    this.position.width = 400;
    this.position.height = 300;
    pref("JSONrect", JSON.stringify(this.position));
    this.resetMovieInfo();
  },
  destroyButton: function Critiques_destroyButton() {
    try {
      this.button.parentNode.removeChild(this.button);
      this.button = null;
    } catch (ex) {}
  },
  saveToolbarButtonInfo: function Critiques_saveTooolbarButtonInfo() {
    if (this.chromeDoc.getElementById("critiques-button") &&
        this.button.parentNode) {
      pref("buttonParentID", this.button.parentNode.getAttribute("id") || "");
      pref("buttonNextSiblingID", (this.button.nextSibling || "") && 
        this.button.nextSibling.getAttribute("id").replace(/^wrapper-/i, ""));
    }
    else
      pref("buttonParentID", "");
  },
  buildButton: function Critiques_buildButton() {
    // add toolbar button
    let button = this.chromeDoc.createElement("toolbarbutton");
    button.id = "critiques-button";
    button.className = "chromeclass-toolbar-additional toolbarbutton-1";
    button.setAttribute("style", "list-style-image: url(" + ICON_CLOSE +")");
    button.onclick = this.onButtonClick.bind(this);

    this.chromeDoc.getElementById("navigator-toolbox").palette.appendChild(button);
    let buttonParentID = pref("buttonParentID");
    if (buttonParentID.length > 0) {
      let parent = this.chromeDoc.getElementById(buttonParentID);
      if (parent) {
        let nextSiblingID = pref("buttonNextSiblingID");
        let nextSibling = this.chromeDoc.getElementById(nextSiblingID);
        if (!nextSibling) {
          let currentset = parent.getAttribute("currentset").split(",");
          let i = currentset.indexOf("critiques-button") + 1;
          if (i > 0) {
            let len = currentset.length;
            for (; i < len; i++) {
              nextSibling = this.chromeDoc.getElementById(currentset[i]);
              if (nextSibling)
                break;
            }
          }
        }
        parent.insertItem("critiques-button", nextSibling, null, false);
      }
    }
    listen(this.chromeWin, this.chromeWin, "aftercustomization", this.saveToolbarButtonInfo);

    return this.button = button;
  },
  removeMenuItem: function Critiques_removeMenuItem() {
    try {
      this.menuitem.parentNode.removeChild(this.menuitem);
      this.menuitem = null;
      this.contextitem.parentNode.removeChild(this.contextitem);
      this.contextitem = null;
    } catch(ex) {}
  },
  addMenuItem: function Critiques_addMenuItem() {
    let XUL = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
    let menuitem = this.chromeDoc.createElementNS(XUL, "menuitem");
    menuitem.setAttribute("id", "critiques-tools-menu");
    menuitem.setAttribute("label", "Movie Critiques");
    menuitem.setAttribute("accesskey", "M");
    menuitem.setAttribute("key", "critiques-key");
    menuitem.onclick = this.onButtonClick.bind(this);
    this.menuitem = menuitem;
    this.chromeDoc.getElementById("menu_ToolsPopup")
      .insertBefore(menuitem, this.chromeDoc.getElementById("menu_pageInfo"));

    let contextEntry = this.chromeDoc.createElementNS(XUL, "menuitem");
    contextEntry.setAttribute("id", "critiques-context-menu");
    contextEntry.setAttribute("class", "menuitem-iconic");
    contextEntry.setAttribute("label", "Movie Critiques");
    contextEntry.setAttribute("accesskey", "M");
    contextEntry.setAttribute("tooltiptext", "Get movie information from various source");
    this.chromeDoc.getElementById("contentAreaContextMenu")
      .insertBefore(contextEntry, this.chromeDoc.getElementById("context-sep-stop"));
    listen(this.chromeWin, contextEntry, "command", this.onButtonClick);
    this.contextitem = contextEntry;
    listen(this.chromeWin, this.chromeDoc.getElementById("contentAreaContextMenu"),
           "popupshowing", this.onPopupShown);
  },
  removeKey: function Critiques_removeKey() {
    try {
      this.keyset.parentNode.removeChild(this.keyset);
      this.keyset = null;
    } catch(ex) {}
  },
  createHotKey: function Critiques_createHotKey() {
    let XUL = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
    let keyset = this.chromeDoc.createElementNS(XUL, "keyset");
    keyset.setAttribute("id", "critiques-keyset");
    this.keyset = keyset;
    // add hotkey
    let key = this.chromeDoc.createElementNS(XUL, "key");
    key.setAttribute("id", "critiques-key");
    key.setAttribute("key", "M");
    key.setAttribute("modifiers", "accel");
    key.setAttribute("oncommand", "void(0);");
    listen(this.chromeWin, key, "command", this.onButtonClick);
    this.key = key;
    this.chromeDoc.getElementById("mainKeyset").parentNode.
      appendChild(keyset).appendChild(key);
  },
  onPopupShown: function Critiques_onPopupShown(e) {
    pref("JSONrect", JSON.stringify(this.position));
    if (this.getSelection().length <= 0) {
      let target = e.target.triggerNode.tagName === 'A' ? e.target.triggerNode
        : (e.target.triggerNode.parentNode.tagName === 'A'? e.target.triggerNode.parentNode : null);
      if (!target || !target.href.match(/(imdb|metacritic|rottentomatoes)\.com/)) {
        this.contextitem.hidden = true;
        return;
      }
      this.target = target;
    }
    else {
      this.target = null;
    }
    this.contextitem.hidden = false;
  },
  onButtonClick: function Critiques_onButtonClick(e) {
    let target = e.target;
    if (target == this.closeButton) {
      this.panel.hidePopup();
    }
    else if (target == this.button || target == this.key || target == this.menuitem) {
      if (this.panel.state == "open" || this.panel.state == "showing") {
        this.panel.hidePopup();
      }
      else {
        //this.target ? this.panel.openPopup(this.target) :
        this.panel.openPopupAtScreen(this.position.left, this.position.top, false);
      }
    }
    else if (target == this.contextitem) {
      if (this.panel.state == "open" || this.panel.state == "showing") {
        this.panel.hidePopup();
      }
      //this.target ? this.panel.openPopup(this.target) :
      this.panel.openPopupAtScreen(this.position.left, this.position.top, false);
    }
  },
  panelDragStart: function Critiques_panelDragStart(e) {
    let screenY = e.screenY + (this.os.windows?1:-55), screenX = e.screenX - 6;
    this.panelDragOffset.x = -this.chromeWin.screenX + screenX - this.panel.boxObject.x;
    this.panelDragOffset.y = -this.chromeWin.screenY + screenY - this.panel.boxObject.y;
    this.panelDragOffset.mouseMoved = false;
    this.panelDragMouseDown = true;
  },
  panelDrag: function Critiques_panelDrag(e) {
    if (!this.panelDragMouseDown || this.dragMouseDown) {
      this.panelDragMouseDown = false;
      return;
    }
    e.preventDefault();
    this.panelDragOffset.mouseMoved = true;
    let x = e.screenX, y = e.screenY;
    if (this.panelDragOffset.x != null)
      x -= this.panelDragOffset.x;
    if (this.panelDragOffset.y != null)
      y -= this.panelDragOffset.y;
    let screenWidth = this.chromeWin.screen.width,
        screenHeight = this.chromeWin.screen.height;
    if (this.docked) {
      if (e.screenX > 0.1*screenWidth &&
          e.screenX < 0.9*screenWidth &&
          e.screenY > 0.1*screenHeight &&
          e.screenY < 0.9*screenHeight)
        this.docked = this.dockPanel("");
      if (!this.docked && (e.screenX < this.panel.boxObject.x ||
          e.screenX > this.panel.boxObject.x + this.panel.boxObject.width)) {
        x = e.screenX - this.panel.boxObject.width / 2;
        this.panelDragOffset.x = this.panel.boxObject.width / 2;
      }
      else if (!this.docked && (e.screenY < this.panel.boxObject.y ||
          e.screenY > this.panel.boxObject.y + this.panel.boxObject.height)) {
        y = e.screenY - this.panel.boxObject.height / 2;
        this.panelDragOffset.y = this.panel.boxObject.height / 2;
      }
    }
    else {
      let indicationPlace = "";
      if (e.screenX < 0.05*screenWidth)
        indicationPlace = "left";
      else if (e.screenX > 0.95*screenWidth)
        indicationPlace = "right";
      else if (e.screenY < 0.05*screenHeight)
        indicationPlace = "top";
      else if (e.screenY > 0.95*screenHeight)
        indicationPlace = "bottom";
      if (indicationPlace != "")
        this.showIndicatoryPanel(indicationPlace);
      else if (this.iPanel && this.iPanel.state == "open")
        this.iPanel.hidePopup();
    }
    if (!this.docked)
      this.panel.moveTo(x, y);
  },
  panelDragEnd: function Critiques_panelDragEnd(e) {
    if (!this.panelDragMouseDown || this.dragMouseDown || !this.panelDragOffset.mouseMoved) {
      this.panelDragMouseDown = false;
      return;
    }
    let screenWidth = this.chromeWin.screen.width,
        screenHeight = this.chromeWin.screen.height;
    let dockTo = "";
    if (e.screenX < 0.05*screenWidth)
      dockTo = "left";
    else if (e.screenX > 0.95*screenWidth)
      dockTo = "right";
    else if (e.screenY < 0.05*screenHeight)
      dockTo = "top";
    else if (e.screenY > 0.95*screenHeight)
      dockTo = "bottom";
    if (dockTo != "")
      this.docked = this.dockPanel(dockTo);
    this.panelDragMouseDown = false;
  },
  dockPanel: function Critiques_dockPanel(aDockTo) {
    let width = this.chromeWin.screen.width,
        height = this.chromeWin.screen.height;
    if (this.iPanel && this.iPanel.state == "open")
      this.iPanel.hidePopup();
    switch(aDockTo) {
      case "top":
        this.position.dockedWidth = width - 25;
        this.position.dockedHeight = 250;
        this.panel.moveTo(0, 0);
        break;
      case "bottom":
        this.position.dockedWidth = width - 25;
        this.position.dockedHeight = 250;
        this.panel.moveTo(0, height - 345);
        break;
      case "left":
        this.position.dockedWidth = 475;
        this.position.dockedHeight = height - 25;
        this.panel.moveTo(0, 0);
        break;
      case "right":
        this.position.dockedWidth = 475;
        this.position.dockedHeight = height - 25;
        this.panel.moveTo(width - 485, 0);
        break;
      default:
        if (this.docked) {
          this.panel.style.width = this.position.width + "px";
          this.panel.style.height = this.position.height + "px";
        }
        return false;
    }
    // Saving the preferences.
    this.position.top = this.panel.boxObject.y;
    this.position.left = this.panel.boxObject.x;
    this.position.width = this.panel.boxObject.width;
    this.position.height = this.panel.boxObject.height;
    this.panel.style.width = (this.position.dockedWidth + 40) + "px";
    this.panel.style.height = (this.position.dockedHeight + 80) + "px";
    return true;
  },
  showIndicatoryPanel: function Critiques_showIndicatoryPanel(aWhere) {
    if (!this.iPanel) {
      this.iPanel = this.chromeDoc.createElement("panel");
      this.iPanel.id = "critiques-indication-panel";
      this.iPanel.setAttribute("noautofocus", true);
      this.iPanel.setAttribute("noautohide", true);
      this.iPanel.setAttribute("level", "floating");
      this.iPanel.setAttribute("style", "-moz-appearance: none !important;background:rgba(0,100,150,0.1);" +
                                        "border:3px solid #36a;border-radius:5px;");
      if (!this.os.windows) {
        let label = this.chromeDoc.createElement("label");
        label.setAttribute("value", "Dock here");
        this.iPanel.appendChild(label);
        this.iPanel.style.background = "white";
      }
      this.chromeDoc.querySelector("#mainPopupSet").appendChild(this.iPanel);
    }
    let x = 0, y = 0, width = 0, height = 0,
        screenWidth = this.chromeWin.screen.width,
        screenHeight = this.chromeWin.screen.height;
    switch (aWhere) {
      case "left":
        width = 475;
        height = screenHeight;
        if (!this.os.windows)
          y = screenHeight/2 - 50;
        break;
      case "right":
        width = 475;
        height = screenHeight;
        x = screenWidth - (this.os.windows?304:100);
        if (!this.os.windows)
          y = screenHeight/2 - 50;
        break;
      case "top":
        width = screenWidth;
        height = 300;
        if (!this.os.windows)
          x = screenWidth/2 - 50;
        break;
      case "bottom":
        width = screenWidth;
        height = 300;
        y = screenHeight - (this.os.windows?310:50);
        if (!this.os.windows)
          x = screenWidth/2 - 50;
        break;
    }
    if (!this.os.windows) {
      width = 100;
      height = 50;
    }
    if (this.iPanel.state == "open")
      this.iPanel.moveTo(x, y);
    else
      this.iPanel.openPopupAtScreen(x, y);
    this.iPanel.sizeTo(width, height);
  },
  getSelection: function() {
    let nativeSelection = this.chromeWin.gBrowser.contentDocument.getSelection().toString();
    if (nativeSelection.length == 0) {
      if (this.chromeWin.gBrowser.contentDocument.activeElement.value) {
        let a = this.chromeWin.gBrowser.contentDocument.activeElement;
        if (a.selectionStart < a.selectionEnd) {
          return a.value.substring(a.selectionStart, a.selectionEnd);
        }
      }
      return "";
    }
    return nativeSelection;
  }
};

function critiques(window) {
  function onUnload(aWindow) {
    try{
      if (aWindow.Critiques) {
        aWindow.Critiques.destroy();
        aWindow.Critiques = null;
        delete aWindow.magnifier;
      }
    } catch(e) {}
  }
  onUnload(window);
  window.Critiques = new Critiques(window);
  unload(function () {onUnload(window);}, window);
}

function disable(id) {
  AddonManager.getAddonByID(id, function(addon) {
    addon.userDisabled = true;
  });
}

function startup(data, reason) AddonManager.getAddonByID(data.id, function(addon) {
  gAddon = addon;
  // Load various javascript includes for helper functions
  ["helper", "pref"].forEach(function(fileName) {
    let fileURI = addon.getResourceURI("scripts/" + fileName + ".js");
    Services.scriptloader.loadSubScript(fileURI.spec, global);
  });
  ["keys"].forEach(function(fileName) {
    let fileURI = addon.getResourceURI("keys/" + fileName + ".js");
    Services.scriptloader.loadSubScript(fileURI.spec, global);
  });
  let init = function() {
    if (pref("apiIndex") == -1) {
      pref("apiIndex", Math.floor(Math.random()*API_KEYS.length));
    }
    apiIndex = pref("apiIndex");
    if (pref("personalKey").length != 24) {
      MOVIE_URL = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=" + API_KEYS[apiIndex] + "&page_limit=1&q=";
      MOVIE_URL_IMDB = "http://api.rottentomatoes.com/api/public/v1.0/movie_alias.json?apikey=" + API_KEYS[apiIndex] + "&type=imdb&id=";
    }
    else {
      MOVIE_URL = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=" + pref("personalKey") + "&page_limit=1&q=";
      MOVIE_URL_IMDB = "http://api.rottentomatoes.com/api/public/v1.0/movie_alias.json?apikey=" + pref("personalKey") + "&type=imdb&id="; 
    }
    pref.observe(["personalKey"], function() {
      if (pref("apiIndex") == -1 || pref("apiIndex") >= API_KEYS.length) {
        pref("apiIndex", Math.floor(Math.random()*API_KEYS.length));
      }
      if (pref("apiIndex") == API_KEYS.length) {
        pref("apiIndex", pref("apiIndex") - 1);
      }
      apiIndex = pref("apiIndex");
      if (pref("personalKey").length != 24) {
        MOVIE_URL = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=" + API_KEYS[apiIndex] + "&page_limit=1&q=";
        MOVIE_URL_IMDB = "http://api.rottentomatoes.com/api/public/v1.0/movie_alias.json?apikey=" + API_KEYS[apiIndex] + "&type=imdb&id=";
      }
      else {
        MOVIE_URL = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=" + pref("personalKey") + "&page_limit=1&q=";
        MOVIE_URL_IMDB = "http://api.rottentomatoes.com/api/public/v1.0/movie_alias.json?apikey=" + pref("personalKey") + "&type=imdb&id="; 
      }
    });
    // Apply the changes in UI
    watchWindows(critiques);
  };

  init();
  reload = function() {
    unload();
    init();
  };
});

function shutdown(data, reason) {
  if (reason != APP_SHUTDOWN)
    unload();
}

function install() {}

function uninstall() {}
