import {
  IonApp,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import Menu, { appPages } from "./components/Menu";
import Page from "./pages/Page";
/* Theme variables */
import "./styles/theme.css";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonPage id="main">
            <IonTabs>
              <IonRouterOutlet id="main">
                <Route path="/page/:name" component={Page} exact />
                <Redirect from="/" to="/page/Inbox" exact />
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                {appPages.map((appPage, index) => {
                  return (
                    <IonTabButton
                      key={index}
                      tab={appPage.url}
                      href={appPage.url}
                    >
                      <IonIcon icon={appPage.iosIcon} />
                      <IonLabel>{appPage.title}</IonLabel>
                    </IonTabButton>
                  );
                })}
              </IonTabBar>
            </IonTabs>
          </IonPage>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
