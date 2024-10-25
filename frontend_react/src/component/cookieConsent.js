import { useEffect } from "react";

import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

const pushToDataLayer = (event) => {
  const dataLayer = window.dataLayer || [];
  dataLayer.push({ event });
};

const updateConsent = () => {
  pushToDataLayer("consent_update");
};

const initializeConsent = () => {
  updateConsent();
  setTimeout(() => {
    pushToDataLayer("consent_initial_selection");
  }, 500);
};

const getConfig = ({ lang, privacyPolicyUrl }) => {
  const config = {
    onFirstConsent: initializeConsent,
    onChange: updateConsent,
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
      necessary: {
        readOnly: true,
      },
      functionality: {},
      analytics: {},
      marketing: {},
    },
    language: {
      default: lang,
      // autoDetect: 'browser',
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
            acceptNecessaryBtn: "Nur notwendige Cookies",
            savePreferencesBtn: "Einstellungen speichern",
            closeIconLabel: "Modales Fenster schließen",
            serviceCounterLabel: "Dienst|Dienste",
            sections: [
              {
                title: "Verwendung von Cookies",
                description:
                  "Wenn Sie eine Website besuchen, kann diese Informationen in Form von Cookies auf Ihrem Browser speichern oder abrufen. Diese Informationen können sich auf Sie, Ihre Einstellungen oder Ihr Gerät beziehen und werden hauptsächlich verwendet, um die Website so zu gestalten, wie Sie es erwarten. Die Informationen identifizieren Sie normalerweise nicht direkt, aber sie können Ihnen eine persönlichere Web-Erfahrung bieten. Da wir Ihr Recht auf Privatsphäre respektieren, können Sie bestimmte Arten von Cookies ablehnen. Klicken Sie auf die verschiedenen Kategorien, um mehr zu erfahren und Ihre Standard-Einstellungen zu ändern.",
              },
              {
                title: "Funktionale Cookies",
                description:
                  "Diese Cookies ermöglichen der Website, erweiterte Funktionen und Personalisierung basierend auf Ihrer Interaktion mit der Website bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir zu unseren Seiten hinzugefügt haben.",
                linkedCategory: "functionality",
              },
            ],
          },
        },
      },
    },
  };

  return config;
};

export const useCookieBanner = ({
  lang = "de",
  privacyPolicyUrl = "/datenschutzerklaerung",
}) => {
  useEffect(() => {
    // Uncomment the following line to reset the consent cookie:
    // CookieConsent.reset(true)

    CookieConsent.setLanguage(lang);
    CookieConsent.run(getConfig({ lang, privacyPolicyUrl }));
  }, [lang, privacyPolicyUrl]);

  return null;
};
