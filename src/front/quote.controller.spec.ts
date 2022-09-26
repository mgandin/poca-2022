import { Test, TestingModule } from '@nestjs/testing';
import { QuoteController } from './quote.controller';

describe('QuoteController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [QuoteController],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<QuoteController>(QuoteController);
      expect(appController.hello()).toBe({ message: 'Hello world !' });
    });
  });
});
