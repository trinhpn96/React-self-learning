var _jsxFileName = "/Users/ngoctrinhpham/Desktop/LileLion-Bootcamp/REACT/YoutubeDemo/YOUTUBE/src/main.jsx";
import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=17652533"; const React = __vite__cjsImport0_react.__esModule ? __vite__cjsImport0_react.default : __vite__cjsImport0_react;
import __vite__cjsImport1_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=17652533"; const ReactDOM = __vite__cjsImport1_reactDom_client.__esModule ? __vite__cjsImport1_reactDom_client.default : __vite__cjsImport1_reactDom_client;
import App from "/src/App.jsx";
import "/src/index.css?t=1671181891420";
import NotFound from "/src/pages/NotFound.jsx";
import Videos from "/src/pages/Videos.jsx?t=1671181891420";
import VideoDetails from "/src/pages/VideoDetails.jsx";
import { createBrowserRouter, RouterProvider, Route } from "/node_modules/.vite/deps/react-router-dom.js?v=17652533";
import { jsxDEV as _jsxDEV } from "/@id/__x00__react/jsx-dev-runtime";
const router = createBrowserRouter([{
  path: "/",
  element: /* @__PURE__ */ _jsxDEV(App, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 14
  }, this),
  errorElement: /* @__PURE__ */ _jsxDEV(NotFound, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 19
  }, this),
  children: [{
    index: true,
    element: /* @__PURE__ */ _jsxDEV(Videos, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 31
    }, this)
  }, {
    path: "/videos",
    element: /* @__PURE__ */ _jsxDEV(Videos, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 35
    }, this)
  }, {
    path: "/videos/:keyword",
    element: /* @__PURE__ */ _jsxDEV(Videos, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 44
    }, this)
  }, {
    path: "/videos/watch/:videoId",
    element: /* @__PURE__ */ _jsxDEV(VideoDetails, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 50
    }, this)
  }]
}]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ _jsxDEV(React.StrictMode, {
  children: /* @__PURE__ */ _jsxDEV(RouterProvider, {
    router
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 24,
  columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU9BLFdBQVc7QUFDbEIsT0FBT0MsY0FBYztBQUNyQixPQUFPQyxTQUFTO0FBQ2hCLE9BQU87QUFDUCxPQUFPQyxjQUFjO0FBQ3JCLE9BQU9DLFlBQVk7QUFDbkIsT0FBT0Msa0JBQWtCO0FBQ3pCLFNBQVNDLHFCQUFxQkMsZ0JBQWdCQyxhQUFhO0FBQW1CO0FBQzlFLE1BQU1DLFNBQVNILG9CQUFvQixDQUNqQztBQUFBLEVBQ0VJLE1BQU07QUFBQSxFQUNOQyxTQUFTLHdCQUFDLEtBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQ2JDLGNBQWMsd0JBQUMsVUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFDdkJDLFVBQVUsQ0FDUjtBQUFBLElBQUVDLE9BQU87QUFBQSxJQUFNSCxTQUFTLHdCQUFDLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQUksR0FDbkM7QUFBQSxJQUFFRCxNQUFNO0FBQUEsSUFBV0MsU0FBUyx3QkFBQyxRQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFJLEdBQ3ZDO0FBQUEsSUFBRUQsTUFBTTtBQUFBLElBQW9CQyxTQUFTLHdCQUFDLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQUksR0FDaEQ7QUFBQSxJQUFFRCxNQUFNO0FBQUEsSUFBMEJDLFNBQVMsd0JBQUMsY0FBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBSSxDQUFDO0FBRWpFLENBQUMsQ0FDRjtBQUNELE1BQU1JLE9BQU9kLFNBQVNlLFdBQVdDLFNBQVNDLGVBQWUsTUFBTSxDQUFDO0FBQ2hFSCxLQUFLSSxPQUNILHdCQUFDLE1BQU0sWUFBVTtBQUFBLFlBQ2Ysd0JBQUMsZ0JBQWM7QUFBQSxJQUFDO0FBQUEsRUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUNqQiIsIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJBcHAiLCJOb3RGb3VuZCIsIlZpZGVvcyIsIlZpZGVvRGV0YWlscyIsImNyZWF0ZUJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXJQcm92aWRlciIsIlJvdXRlIiwicm91dGVyIiwicGF0aCIsImVsZW1lbnQiLCJlcnJvckVsZW1lbnQiLCJjaGlsZHJlbiIsImluZGV4Iiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sInNvdXJjZXMiOlsiL1VzZXJzL25nb2N0cmluaHBoYW0vRGVza3RvcC9MaWxlTGlvbi1Cb290Y2FtcC9SRUFDVC9Zb3V0dWJlRGVtby9ZT1VUVUJFL3NyYy9tYWluLmpzeCJdLCJmaWxlIjoiL1VzZXJzL25nb2N0cmluaHBoYW0vRGVza3RvcC9MaWxlTGlvbi1Cb290Y2FtcC9SRUFDVC9Zb3V0dWJlRGVtby9ZT1VUVUJFL3NyYy9tYWluLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSBcIi4vcGFnZXMvTm90Rm91bmRcIjtcbmltcG9ydCBWaWRlb3MgZnJvbSBcIi4vcGFnZXMvVmlkZW9zXCI7XG5pbXBvcnQgVmlkZW9EZXRhaWxzIGZyb20gXCIuL3BhZ2VzL1ZpZGVvRGV0YWlsc1wiO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3NlclJvdXRlciwgUm91dGVyUHJvdmlkZXIsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xuICB7XG4gICAgcGF0aDogXCIvXCIsXG4gICAgZWxlbWVudDogPEFwcCAvPixcbiAgICBlcnJvckVsZW1lbnQ6IDxOb3RGb3VuZCAvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyBpbmRleDogdHJ1ZSwgZWxlbWVudDogPFZpZGVvcyAvPiB9LFxuICAgICAgeyBwYXRoOiBcIi92aWRlb3NcIiwgZWxlbWVudDogPFZpZGVvcyAvPiB9LFxuICAgICAgeyBwYXRoOiBcIi92aWRlb3MvOmtleXdvcmRcIiwgZWxlbWVudDogPFZpZGVvcyAvPiB9LFxuICAgICAgeyBwYXRoOiBcIi92aWRlb3Mvd2F0Y2gvOnZpZGVvSWRcIiwgZWxlbWVudDogPFZpZGVvRGV0YWlscyAvPiB9LFxuICAgIF0sXG4gIH0sXG5dKTtcbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XG5yb290LnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+XG4pO1xuIl19