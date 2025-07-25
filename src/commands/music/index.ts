import { handlePlayCommand, playCommand } from './play.command';
import { BotCommandMap, BotCommands } from '@lib';
import { handleStopCommand, stopCommand } from './stop.command';
import { handleSkipCommand, skipCommand } from './skip.command';
import { handleNowPlayingCommand, nowPlayingCommand } from './now-playing.command';
import { handlePauseCommand, pauseCommand } from './pause.command';
import { handleLoopCommand, loopCommand } from './loop.command';
import { clearQueueCommand, handleClearQueueCommand } from './clear-queue.command';

export const MusicCommandsMap: BotCommandMap = {
  [BotCommands.PLAY]: {
    slashCommandBuilder: playCommand,
    handleFn: handlePlayCommand,
  } as const,
  [BotCommands.NOW_PLAYING]: {
    slashCommandBuilder: nowPlayingCommand,
    handleFn: handleNowPlayingCommand,
  } as const,
  [BotCommands.PAUSE]: {
    slashCommandBuilder: pauseCommand,
    handleFn: handlePauseCommand,
  } as const,
  [BotCommands.STOP]: {
    slashCommandBuilder: stopCommand,
    handleFn: handleStopCommand,
  } as const,
  [BotCommands.SKIP]: {
    slashCommandBuilder: skipCommand,
    handleFn: handleSkipCommand,
  } as const,
  [BotCommands.LOOP]: {
    slashCommandBuilder: loopCommand,
    handleFn: handleLoopCommand,
  } as const,
  [BotCommands.CLEAR_QUEUE]: {
    slashCommandBuilder: clearQueueCommand,
    handleFn: handleClearQueueCommand,
  } as const,
} as const;
