import { createFileRoute } from '@tanstack/react-router';
import ResumePage from '../resume/page';

export const Route = createFileRoute('/')({
  component: ResumePage,
});
