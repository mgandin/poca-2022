import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class QuoteController {
  @Get()
  @Render('index')
  hello() {
    return { message: 'Hello World !' };
  }
}
