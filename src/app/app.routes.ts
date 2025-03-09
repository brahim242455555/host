import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'mfe',
    loadChildren: () => {
      console.log('🔹 Tentative de chargement du MFE...');

      return loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.json',
        remoteName: 'mfe',
        exposedModule: './Routes', // ✅ Vérifie que c'est bien la même expo dans federation.config.cjs
      })
        .then((m) => {
          console.log('✅ MFE chargé avec succès:', m);
          return m.routes; // ✅ Charger le NgModule du MFE
        })
        .catch((error) => {
          console.error('❌ Erreur lors du chargement du MFE:', error);
          return null;
        });
    },
  },
];
