import { Module } from '@nestjs/common';
import { CancelNotification } from 'src/application/use-cases/cancel-notification';
import { CountRecipientNotifications } from 'src/application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from 'src/application/use-cases/get-recipient-notifications';
import { ReadNotification } from 'src/application/use-cases/read-notification';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { UnreadNotification } from 'src/application/use-cases/unread-notification';
import { DatabseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
