import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  list: ContentList
  item1: Content;
  item2: Content;
  item3: Content;

  constructor() { 
    this.item1 = {
      id: 0,
      title: 'Pokemon Red',
      description: 'Pokémon Red Version and Pokémon Blue Version are 1996 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy',
      creator: 'Game Freak',
      imgURL: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.wikimg.net%2Fen%2Fstrategywiki%2Fimages%2Fc%2Fca%2FPokemon_red_box.jpg&imgrefurl=https%3A%2F%2Fstrategywiki.org%2Fwiki%2FPok%25C3%25A9mon_Red_and_Blue&tbnid=Q0Go8UTlQfnvrM&vet=12ahUKEwiWlf3Rsuz1AhVtgnIEHYdMCxQQMygCegUIARC8AQ..i&docid=YwP5_SlPOY-LPM&w=600&h=600&q=pokemon%20red%20description&ved=2ahUKEwiWlf3Rsuz1AhVtgnIEHYdMCxQQMygCegUIARC8AQ',
      type: 'GameBoy'
    };
    this.item2 = {
      id: 1,
      title: 'Banjo-Kazooie',
      description: 'The games feature a male bear named Banjo and his friend, a large female red bird called Kazooie, who are both controlled by the player',
      creator: 'Rare',
      imgURL: 'https://www.google.com/search?q=banjo+kazooie&sa=X&bih=880&biw=1920&rlz=1C1CHBF_enCA972CA972&hl=en-GB&sxsrf=APq-WBt_j5OOjbtox0vMA_Sh9YZc1PKftA:1644195898357&tbm=isch&source=iu&ictx=1&vet=1&fir=tHDU-rorsfpqWM%252CiKmQi1X8USgd9M%252C_%253B8dxVvODFPZd4MM%252C_7jSPTsd3PHLaM%252C_%253BTKuhPQYH4KgKOM%252CHQrYQEumMh298M%252C_%253BrjXhBbAdqv5U0M%252CoRL1sQjYk3bODM%252C_%253BN0qSszeadbPm0M%252C5sI_eGbLqagX2M%252C_&usg=AI4_-kQJ2dbQDKHs7lWU8WkFiuxTqvbOGg&ved=2ahUKEwiGitmDs-z1AhWam2oFHRf_Ag4Q_h16BAgxEAE#imgrc=8dxVvODFPZd4MM',
      type: 'Nintendo 64'
      
    };
    this.item3 = {
      id: 2,
      title: 'Rust',
      description: 'Rust is a multiplayer-only survival video game developed by Facepunch Studios',
      creator: 'Facepunch Studios',
      imgURL: 'https://www.google.com/search?q=Rust+(video+game)&sa=X&rlz=1C1CHBF_enCA972CA972&hl=en-GB&biw=1920&bih=880&sxsrf=APq-WBuQC90EoVqn-4BEO2Agk6pcLejzPw:1644196044661&tbm=isch&source=iu&ictx=1&vet=1&fir=yHSDz8QHzGRC2M%252C7GAxSix_X9GvhM%252C%252Fm%252F0zm_2_r%253BZsTRLMl_YbUeIM%252C-NAQ8YwMwdek-M%252C_%253BoGOvQSehGL0xPM%252CzDjun5soXiHmrM%252C_%253BHHN7onPyScpc6M%252CYCi4L-Z_PO0DlM%252C_%253BuUvRcAm9M_1TeM%252CVT7P_JNyC-sDWM%252C_%253Bb_v5l-ewacQZGM%252CzDjun5soXiHmrM%252C_%253BNBdSHpvu2kMmpM%252CFNRiWP4yT4bGOM%252C_&usg=AI4_-kRbj7sweuiN0pZGNQjzhIAqbtlj8A&ved=2ahUKEwjT5rrJs-z1AhUGl4kEHWNtD0AQ_B16BAg4EAE#imgrc=yHSDz8QHzGRC2M',
      type: 'Playstation, Xbox, and Computers'
    };
    this.list = new ContentList();
    this.list.addContent(this.item1);
    this.list.addContent(this.item2);
    this.list.addContent(this.item3);

  }

  ngOnInit(): void {
  }

}
