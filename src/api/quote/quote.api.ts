import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateQuoteCommand } from './quote.command';
import { Quote } from './quote.entity';
import { QuoteUsecase } from './quote.usecase';

@Controller('quote')
export class QuoteApi {
  @Inject(QuoteUsecase)
  private readonly quoteUsecase: QuoteUsecase;

  @Get(':id')
  public async get(@Param('id', ParseIntPipe) id: number): Promise<Quote> {
    return await this.quoteUsecase.get(id);
  }

  @Post()
  public async create(@Body() quote: CreateQuoteCommand): Promise<Quote> {
    return await this.quoteUsecase.create(quote);
  }
}