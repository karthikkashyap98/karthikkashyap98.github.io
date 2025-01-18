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
  Github,
  Linkedin,
  Instagram,
  Mail,
} from 'angular-feather/icons';

const icons = {
  Server,
  Cloud,
  Database,
  Layout,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Mail,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
