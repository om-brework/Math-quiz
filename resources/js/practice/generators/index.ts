import type { TopicDef } from '../types';
import { topics as sd1 } from './sd1';
import { topics as sd2 } from './sd2';
import { topics as sd3 } from './sd3';

/** Semua topik yang punya generator soal. */
export const TOPICS: TopicDef[] = [...sd1, ...sd2, ...sd3];

export const topicDef = (id: string) => TOPICS.find((t) => t.topic === id) ?? null;
