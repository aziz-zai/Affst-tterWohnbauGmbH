import { useEffect, useState } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

const pushToDataLayer = (event, setPreferences) => {
  const dataLayer = window.dataLayer || [];
  dataLayer.push({ event });

  // Get the latest preferences and update state
  const preferences = CookieConsent.getUserPreferences();
  setPreferences(preferences); // Update preferences in state
};

const updateConsent = (setPreferences) => {
  pushToDataLayer("consent_update", setPreferences);
};

const initializeConsent = (setPreferences) => {
  updateConsent(setPreferences);
  setTimeout(() => {
    pushToDataLayer("consent_initial_selection", setPreferences);
  }, 500);
};

const getConfig = ({ lang, privacyPolicyUrl, setPreferences }) => {
  return {
    onFirstConsent: () => initializeConsent(setPreferences),
    onChange: () => updateConsent(setPreferences),
    guiOptions: {
      consentModal: {
        layout: "bar inline",
        position: "bottom",
        equalWeightButtons: false,
        flipButtons: false,
      },
      preferencesModal: {
        layout: "box",
        position: "right",
        equalWeightButtons: true,
        flipButtons: false,
      },
    },
    categories: {
      functionality: {},
    },
    language: {
      default: lang,
      translations: {
        de: {
          consentModal: {
            title: "Wir schätzen Ihre Privatsphäre",
            description: `Wir verwenden Cookies, um Ihre Browser-Erfahrung zu verbessern, Anzeigen oder Inhalte zu personalisieren und unseren Traffic zu analysieren, um die Benutzererfahrung auf unserer Website zu verbessern. Durch Klicken auf "Alle akzeptieren" stimmen Sie der Verwendung von Cookies zu. Weitere Informationen finden Sie in unserer <a href="${privacyPolicyUrl}">Datenschutzerklärung</a>.`,
            acceptAllBtn: "Alle akzeptieren",
            acceptNecessaryBtn: "Nur notwendige Cookies",
            showPreferencesBtn: "Einstellungen anpassen",
          },
          preferencesModal: {
            title: "Datenschutzeinstellungen",
            acceptAllBtn: "Alle Cookies akzeptieren",
            savePreferencesBtn: "Einstellungen speichern",
            closeIconLabel: "Modales Fenster schließen",
            serviceCounterLabel: "Dienst|Dienste",
            sections: [
              {
                title: "Verwendung von Cookies",
                description:
                  "Wenn Sie eine Website besuchen, kann diese Informationen in Form von Cookies auf Ihrem Browser speichern oder abrufen...",
              },
              {
                title: "Funktionale Cookies",
                description:
                  "Diese Cookies ermöglichen der Website, erweiterte Funktionen und Personalisierung basierend auf Ihrer Interaktion bereitzustellen...",
                linkedCategory: "functionality",
              },
            ],
          },
        },
      },
    },
  };
};

export const useCookieBanner = ({
  lang = "de",
  privacyPolicyUrl = "/datenschutzerklaerung",
}) => {
  const [preferences, setPreferences] = useState(null);

  useEffect(() => {
    CookieConsent.setLanguage(lang);
    CookieConsent.run(getConfig({ lang, privacyPolicyUrl, setPreferences }));
    setPreferences(CookieConsent.getUserPreferences());

  }, [lang, privacyPolicyUrl]);

  return preferences; // Return preferences so it can be accessed in App.js
};
