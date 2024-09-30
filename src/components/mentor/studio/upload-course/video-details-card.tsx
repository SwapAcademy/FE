import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function VideoDetailsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Video Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="flex flex-col gap-4"
          action=""
        >
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Input the title of your video"
          />
          <Label htmlFor="description">Description</Label>
          <Textarea
            className="h-24"
            name="description"
            id="description"
            placeholder="Provide a short description of your video content"
          ></Textarea>
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Web Development</SelectItem>
              <SelectItem value="2">Mobile Development</SelectItem>
              <SelectItem value="3">Data Science</SelectItem>
              <SelectItem value="4">UI/UX Design</SelectItem>
            </SelectContent>
          </Select>
          <Label htmlFor="skill">Skill Level</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose a skill level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Beginner</SelectItem>
              <SelectItem value="2">Intermediate</SelectItem>
              <SelectItem value="3">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </form>
      </CardContent>
    </Card>
  );
}
