// icons.module.ts
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
  Server,
  Cloud,
  Database,
  Layout,
  Download,
} from 'angular-feather/icons';

const icons = {
  Server,
  Cloud,
  Database,
  Layout,
  Download,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
