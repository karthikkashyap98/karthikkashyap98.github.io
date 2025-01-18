// icons.module.ts
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
  Server,
  Cloud,
  Database,
  Layout,
  Download,
  ExternalLink,
} from 'angular-feather/icons';

const icons = {
  Server,
  Cloud,
  Database,
  Layout,
  Download,
  ExternalLink,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
