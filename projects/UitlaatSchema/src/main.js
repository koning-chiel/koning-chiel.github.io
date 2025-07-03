import { initializeApp as e } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getFirestore as t,
  collection as n,
  addDoc as d,
  doc as o,
  getDocs as s,
  getDoc as i,
  deleteDoc as l,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
let gegevens,
  currentKey,
  firebaseConfig = {
    apiKey: apikey(
      "):"
    ),
    authDomain: "uitlaatschemapepper.firebaseapp.com",
    projectId: "uitlaatschemapepper",
    storageBucket: "uitlaatschemapepper.appspot.com",
    messagingSenderId: apikey("052052048052053053050048048052052051"),
    appId: apikey(
      "049058052052048052053053050048048052052051058119101098058098099048052053101100050052051054057097100049048099050051051057101"
    ),
  };

function apikey(e) {
  let t = "";
  for (let n = 0; n < e.length; n += 3)
    t += String.fromCharCode(e.substring(n, n + 3));
  return t;
}
let app = e(firebaseConfig),
  db = t(app);

function openTab(e, t) {
  let n, d, o;
  for (
    n = 0, d = document.getElementsByClassName("tab-content");
    n < d.length;
    n++
  )
    d[n].classList.remove("active");
  for (n = 0, o = document.getElementsByClassName("tab"); n < o.length; n++)
    o[n].classList.remove("active");
  document.getElementById(t).classList.add("active"),
    undefined !== e && e.currentTarget.classList.add("active");
}
const y = new Date();
function date(e) {
  if (e === 0) {
    return 7;
  }
  return e;
}
openTab(undefined, `tab${date(y.getDay())}`),
  document.getElementById("tab1-button").addEventListener("click", (e) => {
    openTab(e, "tab1");
  }),
  document.getElementById("tab2-button").addEventListener("click", (e) => {
    openTab(e, "tab2");
  }),
  document.getElementById("tab3-button").addEventListener("click", (e) => {
    openTab(e, "tab3");
  }),
  document.getElementById("tab4-button").addEventListener("click", (e) => {
    openTab(e, "tab4");
  }),
  document.getElementById("tab5-button").addEventListener("click", (e) => {
    openTab(e, "tab5");
  }),
  document.getElementById("tab6-button").addEventListener("click", (e) => {
    openTab(e, "tab6");
  }),
  document.getElementById("tab7-button").addEventListener("click", (e) => {
    openTab(e, "tab7");
  }),
  document.getElementById("opslaan").addEventListener("click", (e) => {
    opslaan();
  });
let querySnapshot = await s(n(db, "collection_obj"));
querySnapshot.forEach((e) => {
  currentKey = e.id;
});
let docRef = o(db, "collection_obj", currentKey),
  docSnap = await i(docRef);

function objectToString(e) {
  return (
    console.log("changed ", e, " to ", JSON.stringify(e)), JSON.stringify(e)
  );
}

function stringToObject(e) {
  return console.log("changed ", e, " to ", JSON.parse(e)), JSON.parse(e);
}
async function deleteDocuments() {
  let e = await s(n(db, "collection_obj"));
  await Promise.all(
    e.docs.map(async (e) => {
      await l(o(db, "collection_obj", e.id));
    })
  );
}
async function addDocuments() {
  console.log("Bezig met opslaan...");
  try {
    let e = await d(n(db, "collection_obj"), {
      str: objectToString(gegevens),
    });
    console.log("Document written with ID: ", e.id);
  } catch (t) {
    console.error("Error adding document: ", t);
  }
  console.log("Gegevens opgeslagen:", gegevens);
}
async function opslaan() {
  gegevens = {
    maandag: c("maandag", 1)[1],
    dinsdag: c("dinsdag", 1)[1],
    woensdag: c("woensdag", 1)[1],
    donderdag: c("donderdag", 1)[1],
    vrijdag: c("vrijdag", 1)[1],
    zaterdag: c("zaterdag", 1)[1],
    zondag: c("zondag", 1)[1],
  };
  b("maandag"),
    b("dinsdag"),
    b("woensdag"),
    b("donderdag"),
    b("vrijdag"),
    b("zaterdag"),
    b("zondag"),
    console.log("Bezig met database updaten..."),
    deleteDocuments()
      .then(() => {
        console.log("All documents deleted successfully.");
        addDocuments();
        document.getElementById("is-saved").innerHTML = "Opgeslagen!";
        document.getElementById("is-saved").style.opacity = 1;
        document.getElementById("opslaan").style.cursor = "not-allowed";
        //prettier-ignore
        document.getElementById("opslaan").style.backgroundColor = "#949494";
        setTimeout(() => {
          document.getElementById("is-saved").style.transition = "5s";
          document.getElementById("is-saved").style.opacity = 0;
          setTimeout(() => {
            document.getElementById("opslaan").style.cursor = "pointer";
            //prettier-ignore
            document.getElementById("opslaan").style.backgroundColor = document.getElementById("tab1-button").style.backgroundColor
            document.getElementById("is-saved").style.transition = "0s";
          }, 5e3);
        }, 1);
      })
      .catch((e) => {
        console.error("Error deleting documents:", e);
      });
}

function c(e, t) {
  return [
    `rondje${t}`,
    {
      start: document.getElementById(`${e}-start-tijd${t}`).value,
      eind: document.getElementById(`${e}-eind-tijd${t}`).value,
      lengteVanWandeling: document.getElementById(
        `${e}-lengte-van-wandeling${t}`
      ).value,
      door: document.getElementById(`${e}-door${t}`).value,
    },
  ];
}

function b(e) {
  (gegevens[e][c(e, 1)[0]] = c(e, 1)[1]),
    (gegevens[e][c(e, 2)[0]] = c(e, 2)[1]),
    (gegevens[e][c(e, 3)[0]] = c(e, 3)[1]),
    (gegevens[e][c(e, 4)[0]] = c(e, 4)[1]),
    (gegevens[e][c(e, 5)[0]] = c(e, 5)[1]);
}

function a(e, t) {
  unc(e, 1, t), unc(e, 2, t), unc(e, 3, t), unc(e, 4, t), unc(e, 5, t);
}

function loadValues(e) {
  a("maandag", e),
    a("dinsdag", e),
    a("woensdag", e),
    a("donderdag", e),
    a("vrijdag", e),
    a("zaterdag", e),
    a("zondag", e);
}

function unc(e, t, n) {
  (document.getElementById(`${e}-start-tijd${t}`).value =
    n[e][`rondje${t}`].start),
    (document.getElementById(`${e}-eind-tijd${t}`).value =
      n[e][`rondje${t}`].eind),
    (document.getElementById(`${e}-lengte-van-wandeling${t}`).value =
      n[e][`rondje${t}`].lengteVanWandeling),
    (document.getElementById(`${e}-door${t}`).value = n[e][`rondje${t}`].door);
}
docSnap.exists()
  ? loadValues(stringToObject(docSnap.data().str))
  : console.log("No such document!"),
  console.warn(
    "Waarom druk jij op F12? Probeer jij mijn code soms te stelen, hm, Vuile Rat!"
  );
export { loadValues, openTab };
