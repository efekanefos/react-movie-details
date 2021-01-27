import Home from "../components/Home";
import Contact from "../components/Contact";
import About from "../components/About";
import Search from "../components/Search";
import MovieDetail from "../components/moviefiles/MovieDetail";
import Movies from "../components/moviefiles/Movies";
import NotFound from "../base/NotFound";

const tabs = [{
    url: "/",
    pageHead: "Home",
    component: Home,
    isExact: true,
    isLink: true
  },
  {
    url: "/search",
    pageHead: "Search",
    component: Search,
    isExact: false,
    isLink: false
  },
  {
    url: "/movies/:movieID",
    pageHead: "MovieDetail",
    component: MovieDetail,
    isExact: false,
    isLink: false
  },
  {
    url: "/movies",
    pageHead: "Movies",
    component: Movies,
    isExact: false,
    isLink: true
  },
  {
    url: "/contact",
    pageHead: "Contact",
    component: Contact,
    isExact: true,
    isLink: true
  },

  {
    url: "/about",
    pageHead: "About",
    component: About,
    isExact: false,
    isLink: true
  },

  {
    url: "",
    pageHead: "404",
    component: NotFound,
    isExact: false,
    isLink: false
  }
];

export default tabs;