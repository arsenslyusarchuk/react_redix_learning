import * as types from "./actionTypesConstants";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}