import { helper } from '@ember/component/helper';

export default helper(function formatDate(params/*, hash*/) {
  return moment(params[0]).from();
});
